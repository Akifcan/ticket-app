import { createClient } from '@supabase/supabase-js'
export default function () {
  const runtimeConfig = useRuntimeConfig()

  const supabase = createClient(runtimeConfig.public.supabaseUrl, runtimeConfig.public.supabaseKey)
  return supabase
}
