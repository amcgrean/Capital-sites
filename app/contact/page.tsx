import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import ContactForm from './ContactForm'
import { BRAND } from '@/lib/brand'
import { PhoneIcon, PinIcon, MailIcon, ClockIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Contact & Referrals',
  description:
    "Contact Cecilia's Home in West Des Moines, Iowa. Call 816-217-2219, email ceciliashomellc@gmail.com, or send us a message about admissions and availability.",
  alternates: { canonical: `${BRAND.url}/contact` },
}

const CONTACT_METHODS = [
  {
    label: 'Call Us',
    value: BRAND.phone,
    href: BRAND.phoneHref,
    Icon: PhoneIcon,
    note: 'We’re happy to answer any questions.',
  },
  {
    label: 'Email Us',
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
    Icon: MailIcon,
    note: 'Send us a note anytime.',
  },
  {
    label: 'Visit Us',
    value: `${BRAND.street}, ${BRAND.cityStateZip}`,
    href: BRAND.mapsUrl,
    external: true,
    Icon: PinIcon,
    note: 'West Des Moines, Iowa.',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact & Referrals"
        title="We’d love to hear from you"
        subtitle="Whether you're a family member, case manager, or exploring options for yourself, reach out and we'll help however we can."
      />

      <section className="bg-cloud">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* ── Contact details ─────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <p className="eyebrow mb-3">Get in Touch</p>
                <h2 className="section-title mb-3">Here to help, every step of the way</h2>
                <p className="font-sans text-ink/65 leading-relaxed">
                  Reach out through whichever way is easiest for you. We&rsquo;ll
                  respond as soon as we can.
                </p>
              </div>

              <div className="space-y-4">
                {CONTACT_METHODS.map(({ label, value, href, Icon, note, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="card p-5 flex items-start gap-4 hover:shadow-md transition-shadow"
                  >
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy text-white shrink-0">
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-sans text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-1">
                        {label}
                      </span>
                      <span className="block font-serif text-navy font-semibold break-words">
                        {value}
                      </span>
                      <span className="block font-sans text-sm text-ink/55 mt-0.5">{note}</span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="card p-5 flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-sage/12 text-sage shrink-0">
                  <ClockIcon className="w-6 h-6" />
                </span>
                <span>
                  <span className="block font-sans text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-1">
                    Support Hours
                  </span>
                  <span className="block font-serif text-navy font-semibold">
                    Care staff on-site 24 / 7
                  </span>
                  <span className="block font-sans text-sm text-ink/55 mt-0.5">
                    Office inquiries returned during business hours.
                  </span>
                </span>
              </div>
            </div>

            {/* ── Form ────────────────────────────────────────────── */}
            <div className="lg:col-span-3">
              <div className="card p-8 md:p-10">
                <p className="eyebrow mb-2">Send a Message</p>
                <h2 className="font-serif text-2xl font-bold text-navy mb-6">
                  Request information
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
