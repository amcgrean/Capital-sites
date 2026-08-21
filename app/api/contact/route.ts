import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { BRAND } from '@/lib/brand'

/**
 * Contact form handler.
 *
 * Sends an email notification via Resend when RESEND_API_KEY is configured.
 * If it is not set (e.g. before the client's email is wired up), the inquiry
 * is logged server-side and the request still succeeds — the form never breaks
 * for the visitor.
 */
const CONTACT_INQUIRY_EMAIL = process.env.CONTACT_INQUIRY_EMAIL ?? BRAND.email
const CONTACT_FROM =
  process.env.CONTACT_FROM_EMAIL ?? "Cecilia's Home Website <onboarding@resend.dev>"

function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  return new Resend(key)
}

function esc(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function POST(req: NextRequest) {
  let body: {
    name?: string
    email?: string
    phone?: string
    reason?: string
    message?: string
  }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { name, email, phone, reason, message } = body

  if (!name || !email) {
    return NextResponse.json(
      { error: 'Name and email are required.' },
      { status: 400 }
    )
  }

  const resend = getResend()

  if (!resend) {
    // No email provider configured yet — log and succeed gracefully.
    console.info('[contact] inquiry received (email not configured):', {
      name,
      email,
      phone,
      reason,
    })
    return NextResponse.json({ success: true }, { status: 200 })
  }

  try {
    await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_INQUIRY_EMAIL,
      reply_to: email,
      subject: `New website inquiry from ${name}${reason ? ` — ${reason}` : ''}`,
      html: `
        <h2 style="font-family:sans-serif;">New Inquiry — Cecilia's Home</h2>
        <table style="border-collapse:collapse;width:100%;max-width:520px;font-family:sans-serif;font-size:14px;">
          <tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#555;vertical-align:top;">Name</td><td style="padding:6px 0;">${esc(name)}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#555;vertical-align:top;">Email</td><td style="padding:6px 0;"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#555;vertical-align:top;">Phone</td><td style="padding:6px 0;">${phone ? esc(phone) : '—'}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#555;vertical-align:top;">Reason</td><td style="padding:6px 0;">${reason ? esc(reason) : '—'}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#555;vertical-align:top;width:120px;">Message</td><td style="padding:6px 0;">${message ? esc(message).replace(/\n/g, '<br>') : '—'}</td></tr>
        </table>
        <p style="font-size:12px;color:#999;margin-top:24px;font-family:sans-serif;">Sent from the Cecilia's Home website.</p>
      `,
    })
  } catch (emailError) {
    console.error('Resend email error:', emailError)
    return NextResponse.json(
      { error: 'Could not send your message right now. Please call us instead.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
