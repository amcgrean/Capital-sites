import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import { SERVICES, METHODOLOGY } from '@/lib/content'
import { BRAND } from '@/lib/brand'
import { ArrowRight, PhoneIcon, CheckIcon, ClipboardCheckIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    "Cecilia's Home provides safe & comfortable living, 24/7 supportive care, person-centered support, and professional, compassionate staff — backed by a comprehensive, evidence-based approach.",
  alternates: { canonical: `${BRAND.url}/services` },
}

// Extra detail points for each service, in the same order as SERVICES
const DETAILS: string[][] = [
  [
    'Comfortable, well-maintained living spaces',
    'A secure and calm home environment',
    'A true sense of community and belonging',
  ],
  [
    'Trained staff on-site day and night',
    'Support available the moment it is needed',
    'Peace of mind for residents and families',
  ],
  [
    'Individualized care plans and goals',
    'Choices that respect personal preferences',
    'A focus on building independence and skills',
  ],
  [
    'Experienced, compassionate caregivers',
    'Patience, warmth, and genuine understanding',
    'Ongoing training and accountability',
  ],
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Provide"
        title="Comprehensive care, built around each person"
        subtitle="Everything at Cecilia's Home is designed to help our residents live safely, comfortably, and with real independence."
      />

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="bg-cloud">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map(({ title, desc, Icon }, i) => (
              <div key={title} className="card p-8 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-navy text-white shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h2 className="font-serif text-xl font-bold text-navy leading-snug">
                    {title}
                  </h2>
                </div>
                <p className="font-sans text-ink/65 leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2.5 mt-auto">
                  {DETAILS[i].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-sage/12 shrink-0">
                        <CheckIcon className="w-3.5 h-3.5 text-sage" />
                      </span>
                      <span className="font-sans text-sm text-ink/70">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ──────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-navy/5 text-navy mb-5">
              <ClipboardCheckIcon className="w-7 h-7" />
            </div>
            <p className="eyebrow mb-3">Our Methodology</p>
            <h2 className="section-title mb-4">
              A comprehensive, evidence-based approach
            </h2>
            <p className="font-sans text-ink/60 leading-relaxed">
              We follow an approach that ensures consistency, accountability, and
              quality in every aspect of care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {METHODOLOGY.map((step, i) => (
              <div key={step} className="relative rounded-2xl bg-cloud border border-cloud-dark p-7 text-center">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gold text-white font-serif font-bold text-lg mb-4">
                  {i + 1}
                </span>
                <p className="font-serif italic text-lg text-navy leading-snug">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-sky/15 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="font-serif italic text-gold text-lg mb-3">{BRAND.tagline}</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Let&rsquo;s find the right support together
          </h2>
          <p className="font-sans text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            Reach out to learn more about availability, admissions, and how we can
            support you or your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={BRAND.phoneHref} className="btn-gold px-8 py-4 text-base">
              <PhoneIcon className="w-5 h-5" />
              {BRAND.phone}
            </a>
            <Link href="/contact" className="btn-white px-8 py-4 text-base">
              Request Information
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
