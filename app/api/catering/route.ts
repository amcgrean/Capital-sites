import { NextRequest, NextResponse } from 'next/server'
import { supabase, BUSINESS_ID } from '@/lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const CATERING_INQUIRY_EMAIL =
  process.env.CATERING_INQUIRY_EMAIL ?? 'owner@atasteofitaly.com'

export async function POST(req: NextRequest) {
  let body: {
    name?: string
    email?: string
    phone?: string
    event_date?: string
    headcount?: string
    details?: string
  }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { name, email, phone, event_date, headcount, details } = body

  if (!name || !email) {
    return NextResponse.json(
      { error: 'Name and email are required.' },
      { status: 400 }
    )
  }

  // Insert into Supabase
  const { error: dbError } = await supabase.from('catering_inquiries').insert({
    business_id: BUSINESS_ID,
    name,
    email,
    phone: phone ?? null,
    event_date: event_date ?? null,
    headcount: headcount ? parseInt(headcount, 10) : null,
    details: details ?? null,
  })

  if (dbError) {
    console.error('Supabase insert error:', dbError)
    return NextResponse.json(
      { error: 'Failed to save inquiry. Please try again.' },
      { status: 500 }
    )
  }

  // Send email notification via Resend
  try {
    await resend.emails.send({
      from: 'A Taste of Italy Website <noreply@atasteofitaly.com>',
      to: CATERING_INQUIRY_EMAIL,
      reply_to: email,
      subject: `New Catering Inquiry from ${name}`,
      html: `
        <h2>New Catering Inquiry</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;font-family:sans-serif;font-size:14px;">
          <tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#555;vertical-align:top;">Name</td><td style="padding:6px 0;">${name}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#555;vertical-align:top;">Email</td><td style="padding:6px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#555;vertical-align:top;">Phone</td><td style="padding:6px 0;">${phone ?? '—'}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#555;vertical-align:top;">Event Date</td><td style="padding:6px 0;">${event_date ?? '—'}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#555;vertical-align:top;">Headcount</td><td style="padding:6px 0;">${headcount ?? '—'}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#555;vertical-align:top;width:120px;">Details</td><td style="padding:6px 0;">${details ? details.replace(/\n/g, '<br>') : '—'}</td></tr>
        </table>
        <p style="font-size:12px;color:#999;margin-top:24px;">Sent from atasteofitaly.com</p>
      `,
    })
  } catch (emailError) {
    // Email failure is non-fatal — inquiry is already saved in DB
    console.error('Resend email error:', emailError)
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
