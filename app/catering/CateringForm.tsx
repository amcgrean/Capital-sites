'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function CateringForm() {
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
      event_date: (form.elements.namedItem('event_date') as HTMLInputElement).value,
      headcount: (form.elements.namedItem('headcount') as HTMLInputElement).value,
      details: (form.elements.namedItem('details') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/catering', {
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
      <div className="bg-green-50 border border-green-200 rounded-sm p-8 text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckIcon />
        </div>
        <h3 className="font-serif text-xl text-charcoal mb-2">
          Inquiry Received!
        </h3>
        <p className="font-sans text-sm text-gray-600 leading-relaxed">
          Thank you — we&rsquo;ll be in touch within one business day to confirm your
          order. For urgent inquiries call{' '}
          <a
            href="tel:5152210743"
            className="font-semibold text-italian-red underline"
          >
            515-221-0743
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
          <input
            type="text"
            name="name"
            required
            placeholder="Jane Smith"
            className="field-input"
          />
        </Field>
        <Field label="Email Address" required>
          <input
            type="email"
            name="email"
            required
            placeholder="jane@example.com"
            className="field-input"
          />
        </Field>
        <Field label="Phone Number">
          <input
            type="tel"
            name="phone"
            placeholder="515-555-0100"
            className="field-input"
          />
        </Field>
        <Field label="Event Date">
          <input
            type="date"
            name="event_date"
            className="field-input"
          />
        </Field>
        <Field label="Estimated Headcount">
          <input
            type="number"
            name="headcount"
            min={1}
            placeholder="50"
            className="field-input"
          />
        </Field>
      </div>

      <Field label="Details & Special Requests">
        <textarea
          name="details"
          rows={5}
          placeholder="Tell us about your event, what you're looking for, any dietary needs, etc."
          className="field-input resize-none"
        />
      </Field>

      {state === 'error' && (
        <p className="font-sans text-sm text-red-600 bg-red-50 border border-red-200 rounded-sm p-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === 'submitting' ? 'Sending…' : 'Send Catering Inquiry'}
      </button>

      <p className="font-sans text-xs text-gray-400 text-center">
        We&rsquo;ll follow up within one business day. 48-hour minimum notice required.
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
    <div className="flex flex-col gap-1">
      <label className="font-sans text-sm font-medium text-charcoal">
        {label}
        {required && <span className="text-italian-red ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

function CheckIcon() {
  return (
    <svg
      className="w-6 h-6 text-green-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}
