/**
 * Shared inline SVG icons — stroke-based, inherit `currentColor`.
 * Sized via className (default w-6 h-6). Reused across pages + components.
 */

type IconProps = { className?: string }

export type IconComponent = (props: IconProps) => JSX.Element

const base = 'w-6 h-6'

export function HeartIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 21s-7.5-4.9-10-9.2C.6 9.2 1.6 5.6 4.8 4.6 7 3.9 9.1 4.8 12 7.6c2.9-2.8 5-3.7 7.2-3 3.2 1 4.2 4.6 2.8 7.2C19.5 16.1 12 21 12 21z" />
    </svg>
  )
}

export function HomeHeartIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 11.5 12 4l9 7.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M5 10.3V20h14v-9.7" />
      <path fill="currentColor" stroke="none" d="M12 18s-3.2-2-4.2-3.8c-.6-1.1-.2-2.6 1.1-3 .9-.3 1.8.1 3.1 1.3 1.3-1.2 2.2-1.6 3.1-1.3 1.3.4 1.7 1.9 1.1 3C15.2 16 12 18 12 18z" />
    </svg>
  )
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 3l7 3v5c0 4.4-3 7.8-7 9-4-1.2-7-4.6-7-9V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4" />
    </svg>
  )
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="9" strokeWidth={1.6} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 7v5l3.5 2" />
    </svg>
  )
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="9" cy="8" r="3" strokeWidth={1.6} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3.5 20a5.5 5.5 0 0111 0" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M16 5.2a3 3 0 010 5.6M17 20a5.5 5.5 0 00-2.3-4.5" />
    </svg>
  )
}

export function HandHeartIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 9.5s-1.2-1.4-2.4-1c-1 .3-1.3 1.4-.8 2.2.7 1.1 3.2 2.6 3.2 2.6s2.5-1.5 3.2-2.6c.5-.8.2-1.9-.8-2.2-1.2-.4-2.4 1-2.4 1z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 15l3.2 2.9a3 3 0 002 .8H15c2.5 0 6-2 6-2M3 14v6" />
    </svg>
  )
}

export function StarPoint({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 3l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9 6.7 19.7l1-5.8L3.5 9.8l5.9-.9L12 3z" />
    </svg>
  )
}

export function ClipboardCheckIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 4h6v3H9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 5.5H6.5A1.5 1.5 0 005 7v12a1.5 1.5 0 001.5 1.5h11A1.5 1.5 0 0019 19V7a1.5 1.5 0 00-1.5-1.5H15" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8.5 13l2 2 4-4.5" />
    </svg>
  )
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className ?? 'w-5 h-5'} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg className={className ?? 'w-5 h-5'} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <circle cx="12" cy="11" r="2.6" strokeWidth={1.8} />
    </svg>
  )
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg className={className ?? 'w-5 h-5'} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth={1.8} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7l8 6 8-6" />
    </svg>
  )
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg className={className ?? 'w-4 h-4'} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}
