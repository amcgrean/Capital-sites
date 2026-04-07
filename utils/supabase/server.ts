import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  ?? 'https://vyatosniqboeqzadyqmr.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY
  ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5YXRvc25pcWJvZXF6YWR5cW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3Nzk0NTcsImV4cCI6MjA4OTM1NTQ1N30.suASHLVzV_UCsWjXc1qV_E298kLzKu7lb6h4efpgdAQ'

type CookieToSet = { name: string; value: string; options?: Record<string, unknown> }

export const createClient = (cookieStore: Awaited<ReturnType<typeof cookies>>) => {
  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet: CookieToSet[]) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options as never)
          )
        } catch {
          // Called from a Server Component — safe to ignore when middleware
          // is handling session refresh.
        }
      },
    },
  })
}
