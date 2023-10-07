import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async () => {
  const supabase = createClient(process.env.NUXT_PUBLIC_SUPBASE_URL!, process.env.NUXT_PUBLIC_SUPBASE_KEY!)
  await supabase.from('customer').delete().eq('name', 'test customer')
  return {
    deleted: true
  }
})
