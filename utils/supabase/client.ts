import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  ?? 'https://vyatosniqboeqzadyqmr.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY
  ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5YXRvc25pcWJvZXF6YWR5cW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3Nzk0NTcsImV4cCI6MjA4OTM1NTQ1N30.suASHLVzV_UCsWjXc1qV_E298kLzKu7lb6h4efpgdAQ'

export const createClient = () =>
  createBrowserClient(supabaseUrl, supabaseKey)
