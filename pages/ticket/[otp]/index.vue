<script setup lang="ts">
import { TicketProps } from '~/components/ticket/types'
const supabase = useSupabase()

const { params } = useRoute()
const ticket = ref<TicketProps>()

const result = ref<string>()

const getDetails = async () => {
  const { data, error } = await supabase.from('customer').select('*').eq('otp_code', params.otp)
  if (error) {
    result.value = 'Unexcepted error occured please try again'
    return
  }
  if (!data?.length) {
    result.value = 'This ticket was not found'
    return
  }
  const response = data[0]
  ticket.value = response
}

onMounted(() => {
  getDetails()
})
</script>

<template>
  <Dialog :use-close-button="false" v-if="result" title="View Ticket" @on-close="result = undefined">
    <p>{{ result }}</p>
  </Dialog>
  <main class="ticket container" v-if="ticket">
    <TicketHero />
    <TicketInfo :ticket="ticket" />
    <TicketQr />
  </main>
  <p v-else>Please wait...</p>
</template>

<style scoped>
.ticket {
  background-color: var(--color-body);
  color: var(--color-dark);
}
</style>
