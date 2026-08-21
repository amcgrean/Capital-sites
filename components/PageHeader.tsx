import { HeartIcon } from './icons'

/**
 * Navy hero band for interior pages — gold eyebrow, serif title, subtitle.
 */
export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      {/* soft decorative glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-sky/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <p className="eyebrow text-gold mb-4">{eyebrow}</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-3 mt-5">
          <span className="w-10 h-px bg-white/30" />
          <HeartIcon className="w-4 h-4 text-gold" />
          <span className="w-10 h-px bg-white/30" />
        </div>
        {subtitle && (
          <p className="font-sans text-white/70 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
