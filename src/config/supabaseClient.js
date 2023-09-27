import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://uyeuwqmlcxmqqijefetc.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5ZXV3cW1sY3htcXFpamVmZXRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2NTQ0MzEsImV4cCI6MjAxMTIzMDQzMX0.XPGn_b0dW0qKIe9KHphTJ_8XlQn6kONfUyBauPeokmo"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase