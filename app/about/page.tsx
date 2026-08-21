import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import { VALUES } from '@/lib/content'
import { BRAND } from '@/lib/brand'
import { HeartIcon, ArrowRight, PhoneIcon, CheckIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about Cecilia's Home — our mission to provide a nurturing, supportive group home in West Des Moines, Iowa, and the values of Care, Respect, Dignity, and Opportunity that guide us.",
  alternates: { canonical: `${BRAND.url}/about` },
}

const SERVE = [
  'Adults seeking a supportive, structured living environment',
  'Individuals who benefit from daily assistance and supervision',
  'People working toward greater independence and life skills',
  'Families and case managers looking for trusted, compassionate care',
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Cecilia's Home"
        title="A place of care, respect & opportunity"
        subtitle="More than a residence — a home where people are supported, empowered, and treated like family."
      />

      {/* ── MISSION ──────────────────────────────────────────────────────── */}
      <section className="bg-cloud">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow mb-3">Our Mission</p>
              <span className="rule-gold mb-6" />
              <h2 className="section-title mb-5">Empowering people to reach their fullest potential</h2>
              <div className="space-y-4 font-sans text-ink/70 leading-relaxed">
                <p>
                  Our purpose and mission is to provide a nurturing and
                  supportive environment for our clients, empowering them to
                  achieve their fullest potential. We are dedicated to delivering
                  high-quality services.
                </p>
                <p>
                  Cecilia&rsquo;s Home was built on a simple belief:{' '}
                  <span className="text-navy font-semibold">
                    quality care has no boundary
                  </span>
                  . Every person who walks through our doors deserves a safe
                  place to live, a community that respects them, and real
                  opportunities to grow.
                </p>
                <p>
                  We are a loving and supportive group home for all people,
                  offering a structured environment that promotes independence,
                  dignity, and respect at every step.
                </p>
              </div>
            </div>

            {/* Vision / values quick card */}
            <div className="card p-8 md:p-10">
              <div className="flex items-center gap-2 mb-6">
                <HeartIcon className="w-5 h-5 text-gold" />
                <p className="font-serif italic text-navy text-xl">{BRAND.tagline}</p>
              </div>
              <p className="eyebrow text-gold mb-4">What We Believe</p>
              <ul className="space-y-4">
                {[
                  'Dedicated to delivering high-quality services',
                  'A nurturing and supportive environment for all',
                  'Independence, dignity, and respect for every resident',
                  'Compassion and professionalism in equal measure',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-sky/12 shrink-0">
                      <CheckIcon className="w-3.5 h-3.5 text-sky" />
                    </span>
                    <span className="font-sans text-ink/75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">Our Core Values</p>
            <h2 className="section-title mb-4">The principles behind everything we do</h2>
            <p className="font-sans text-ink/60 leading-relaxed">
              Four values shape our home and guide our team, day in and day out.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ label, blurb, Icon, ring, text }) => (
              <div key={label} className="card p-7 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${ring} mb-5`}>
                  <Icon className={`w-8 h-8 ${text}`} />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy uppercase tracking-wide mb-2">
                  {label}
                </h3>
                <p className="font-sans text-sm text-ink/60 leading-relaxed">{blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ─────────────────────────────────────────────────── */}
      <section className="bg-cloud">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 card p-8 md:p-10 bg-navy text-white">
              <p className="eyebrow text-gold mb-5">Who We Serve</p>
              <ul className="space-y-4">
                {SERVE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-gold/20 shrink-0">
                      <CheckIcon className="w-3.5 h-3.5 text-gold" />
                    </span>
                    <span className="font-sans text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <p className="eyebrow mb-3">A Home for Everyone</p>
              <span className="rule-gold mb-6" />
              <h2 className="section-title mb-5">
                Supportive living for those who need it most
              </h2>
              <p className="font-sans text-ink/70 leading-relaxed mb-5">
                Cecilia&rsquo;s Home welcomes individuals who benefit from a
                caring, structured setting with support available whenever they
                need it. We meet each person where they are and help them move
                toward the life they want.
              </p>
              <p className="font-sans text-ink/70 leading-relaxed mb-7">
                Not sure if we&rsquo;re the right fit? Reach out — we&rsquo;re
                happy to talk through your situation with no pressure.
              </p>
              <Link href="/contact" className="btn-primary">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-1">
              Have questions about our home?
            </h2>
            <p className="font-sans text-white/65">
              We&rsquo;d love to hear from you and help however we can.
            </p>
          </div>
          <a href={BRAND.phoneHref} className="btn-gold px-8 py-4 text-base shrink-0">
            <PhoneIcon className="w-5 h-5" />
            {BRAND.phone}
          </a>
        </div>
      </section>
    </>
  )
}
