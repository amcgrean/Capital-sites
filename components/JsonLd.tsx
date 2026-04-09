/**
 * JsonLd — injects a JSON-LD <script> tag for structured data.
 *
 * Usage:
 *   <JsonLd schema={{ "@context": "https://schema.org", "@type": "LocalBusiness", ... }} />
 *
 * Reusable across all pages in this multi-tenant framework.
 */
export default function JsonLd({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
