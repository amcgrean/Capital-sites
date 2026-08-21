'use client'

import { useState } from 'react'
import { BRAND } from '@/lib/brand'
import { CheckIcon } from '@/components/icons'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const REASONS = [
  'General question',
  'Admissions / availability',
  'Referral (case manager)',
  'Tour request',
  'Other',
]

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      reason: (form.elements.namedItem('reason') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error(json.error ?? 'Something went wrong. Please try again.')
      }

      setState('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="rounded-2xl bg-sage/8 border border-sage/25 p-8 text-center">
        <div className="w-14 h-14 bg-sage/15 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckIcon className="w-7 h-7 text-sage" />
        </div>
        <h3 className="font-serif text-xl font-bold text-navy mb-2">Message sent!</h3>
        <p className="font-sans text-sm text-ink/65 leading-relaxed">
          Thank you for reaching out. We&rsquo;ll be in touch as soon as we can.
          For anything urgent, please call{' '}
          <a href={BRAND.phoneHref} className="font-semibold text-navy underline">
            {BRAND.phone}
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Your Name" required>
          <input type="text" name="name" required placeholder="Jane Smith" className="field-input" />
        </Field>
        <Field label="Email Address" required>
          <input type="email" name="email" required placeholder="jane@example.com" className="field-input" />
        </Field>
        <Field label="Phone Number">
          <input type="tel" name="phone" placeholder="816-555-0100" className="field-input" />
        </Field>
        <Field label="How can we help?">
          <select name="reason" className="field-input" defaultValue={REASONS[0]}>
            {REASONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Your Message">
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us a little about your situation or what you'd like to know…"
          className="field-input resize-none"
        />
      </Field>

      {state === 'error' && (
        <p className="font-sans text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>

      <p className="font-sans text-xs text-ink/45 text-center">
        We&rsquo;ll respond as soon as we can. For urgent needs, please call{' '}
        <a href={BRAND.phoneHref} className="font-semibold text-navy">
          {BRAND.phone}
        </a>
        .
      </p>
    </form>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-sans text-sm font-semibold text-navy">
        {label}
        {required && <span className="text-gold ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}
