import Link from 'next/link'
import type { Metadata } from 'next'
import Logo from '@/components/Logo'
import { VALUES, SERVICES, METHODOLOGY } from '@/lib/content'
import { BRAND } from '@/lib/brand'
import {
  PhoneIcon,
  ArrowRight,
  HeartIcon,
  ClipboardCheckIcon,
  CheckIcon,
} from '@/components/icons'

export const metadata: Metadata = {
  title: "Cecilia's Home | Supportive Group Home in West Des Moines, Iowa",
  description:
    'A loving and supportive group home for all people. Safe, comfortable living with 24/7 person-centered care in West Des Moines, Iowa.',
  alternates: { canonical: BRAND.url },
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-sky/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-40 -left-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 ring-1 ring-white/15 mb-7">
              <Logo
                className="w-12 h-12"
                roof="#FFFFFF"
                figures={['#4A8AC9', '#5A9E5B', '#F4A94A']}
              />
            </div>

            <p className="wordmark text-gold text-3xl md:text-4xl mb-3">
              Cecilia&rsquo;s Home
            </p>

            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-[1.08] mb-6">
              A loving, supportive home
              <br className="hidden sm:block" /> for all people.
            </h1>

            <p className="font-sans text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto mb-4">
              We provide a safe, structured environment that promotes
              independence, dignity, and respect.
            </p>

            <p className="font-sans text-gold font-semibold uppercase tracking-[0.15em] text-xs md:text-sm mb-9">
              {BRAND.promise}
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
        </div>

        {/* Motto ribbon */}
        <div className="relative border-t border-white/10 bg-navy-dark/50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-center gap-3 text-center">
            <span className="hidden sm:block w-8 h-px bg-gold/50" />
            <p className="font-serif italic text-gold text-lg">{BRAND.motto}</p>
            <span className="hidden sm:block w-8 h-px bg-gold/50" />
          </div>
        </div>
      </section>

      {/* ── VALUES STRIP ─────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-cloud-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {VALUES.map(({ label, blurb, Icon, ring, text }) => (
              <div key={label} className="text-center">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${ring} mb-4`}>
                  <Icon className={`w-7 h-7 ${text}`} />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy uppercase tracking-wide">
                  {label}
                </h3>
                <p className="font-sans text-sm text-ink/60 mt-1.5 leading-relaxed max-w-[15rem] mx-auto">
                  {blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ──────────────────────────────────────────────────────── */}
      <section className="bg-cloud">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-3">Our Mission</p>
              <span className="rule-gold mb-6" />
              <h2 className="section-title mb-5">
                A nurturing place where people are empowered to reach their
                fullest potential.
              </h2>
              <p className="font-sans text-ink/70 leading-relaxed mb-4">
                Our purpose and mission is to provide a nurturing and supportive
                environment for our clients, empowering them to achieve their
                fullest potential. We are dedicated to delivering high-quality
                services rooted in compassion and respect.
              </p>
              <p className="font-sans text-ink/70 leading-relaxed mb-7">
                At Cecilia&rsquo;s Home, everyone deserves a place where they
                feel safe, valued, and genuinely at home — no matter their story.
              </p>
              <Link href="/about" className="btn-outline">
                Learn Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Pledge card */}
            <div className="card p-8 md:p-10 relative">
              <div className="absolute -top-4 -left-4 w-14 h-14 rounded-2xl bg-navy flex items-center justify-center shadow-md">
                <HeartIcon className="w-7 h-7 text-gold" />
              </div>
              <p className="eyebrow text-gold mb-4 pt-2">Our Promise to You</p>
              <ul className="space-y-4">
                {[
                  'A safe, structured, and welcoming environment',
                  'Independence, dignity, and respect, always',
                  'Care shaped around each individual person',
                  'A dedicated team that treats you like family',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-sage/15 shrink-0">
                      <CheckIcon className="w-3.5 h-3.5 text-sage" />
                    </span>
                    <span className="font-sans text-ink/75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WE PROVIDE ───────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-3">What We Provide</p>
            <h2 className="section-title mb-4">Support built around the whole person</h2>
            <p className="font-sans text-ink/60 leading-relaxed">
              From everyday comfort to around-the-clock care, everything we do is
              designed to help our residents live safely, confidently, and well.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="card p-7 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy/5 text-navy mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy mb-2 leading-snug">
                  {title}
                </h3>
                <p className="font-sans text-sm text-ink/60 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-11">
            <Link href="/services" className="btn-primary">
              Explore Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ──────────────────────────────────────────────────── */}
      <section className="bg-navy text-white relative overflow-hidden">
        <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-sky/15 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 ring-1 ring-white/15 mb-6">
                <ClipboardCheckIcon className="w-7 h-7 text-gold" />
              </div>
              <p className="eyebrow text-gold mb-3">Our Methodology</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5 leading-tight">
                A comprehensive, evidence-based approach
              </h2>
              <p className="font-sans text-white/70 leading-relaxed">
                We follow a proven approach that ensures consistency,
                accountability, and quality in every aspect of care — so families
                can trust that their loved ones are truly supported.
              </p>
            </div>

            <ol className="space-y-4">
              {METHODOLOGY.map((step, i) => (
                <li
                  key={step}
                  className="flex items-center gap-4 rounded-2xl bg-white/[0.06] ring-1 ring-white/10 px-5 py-4"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gold text-navy font-serif font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="font-serif italic text-lg text-white/90">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────────────────────── */}
      <section className="bg-cloud">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="card overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 p-9 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <HeartIcon className="w-4 h-4 text-gold" />
                  <p className="font-serif italic text-gold text-lg">{BRAND.tagline}</p>
                </div>
                <h2 className="section-title mb-4">
                  Ready to learn if Cecilia&rsquo;s Home is the right fit?
                </h2>
                <p className="font-sans text-ink/65 leading-relaxed mb-7 max-w-lg">
                  Whether you&rsquo;re a family member, case manager, or exploring
                  options for yourself, we&rsquo;re glad to answer your questions
                  and walk you through everything we offer.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={BRAND.phoneHref} className="btn-primary px-8 py-4 text-base">
                    <PhoneIcon className="w-5 h-5" />
                    {BRAND.phone}
                  </a>
                  <Link href="/contact" className="btn-outline px-8 py-4 text-base">
                    Send a Message
                  </Link>
                </div>
              </div>
              <div className="md:col-span-2 bg-navy text-white p-9 md:p-12 flex flex-col justify-center gap-5">
                <div>
                  <p className="font-sans text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-1">Call Us</p>
                  <a href={BRAND.phoneHref} className="font-serif text-2xl font-bold hover:text-gold transition-colors">
                    {BRAND.phone}
                  </a>
                </div>
                <div>
                  <p className="font-sans text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-1">Visit Us</p>
                  <a
                    href={BRAND.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-white/85 hover:text-gold transition-colors leading-snug block"
                  >
                    {BRAND.street}
                    <br />
                    {BRAND.cityStateZip}
                  </a>
                </div>
                <div>
                  <p className="font-sans text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-1">Email Us</p>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="font-sans text-white/85 hover:text-gold transition-colors break-all"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
