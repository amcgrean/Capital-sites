/**
 * Cecilia's Home logo mark — a gabled roof sheltering three joined figures
 * around a heart, echoing the printed brand. Colors inherit via props so it
 * works on both light and dark (navy) backgrounds.
 */
export default function Logo({
  className = 'w-10 h-10',
  roof = '#1B2E63',
  figures = ['#2E6FB0', '#3E7C3F', '#E58A2E'],
}: {
  className?: string
  roof?: string
  figures?: [string, string, string] | string[]
}) {
  const [a, b, c] = figures
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Roof / house outline */}
      <path
        d="M6 22 24 7l18 15"
        stroke={roof}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Little chimney window */}
      <rect x="21" y="12" width="6" height="6" rx="1" fill={roof} />
      {/* Three joined figures (heads) */}
      <circle cx="16" cy="26" r="3.2" fill={a} />
      <circle cx="24" cy="24.5" r="3.2" fill={b} />
      <circle cx="32" cy="26" r="3.2" fill={c} />
      {/* Bodies forming a sheltering embrace with a heart between */}
      <path
        d="M12 38c0-4 2-6 4-6 1.6 0 2.8.9 3.6 2.2"
        stroke={a}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M36 38c0-4-2-6-4-6-1.6 0-2.8.9-3.6 2.2"
        stroke={c}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M24 30.5c-1.2-1.3-3-1-3.4.3-.3 1 .6 2 3.4 4 2.8-2 3.7-3 3.4-4-.4-1.3-2.2-1.6-3.4-.3z"
        fill={b}
      />
      {/* Ground swoosh */}
      <path
        d="M9 41c5-2 25-2 30 0"
        stroke={figures[0]}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  )
}
