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
  <section class="container flex column" style="--gap: 1rem">
    <Dialog v-if="result" :use-close-button="false" title="View Ticket" @on-close="result = undefined">
      <p>{{ result }}</p>
    </Dialog>
    <main v-if="ticket" class="ticket">
      <TicketHero />
      <TicketInfo :ticket="ticket" />
      <TicketQr :otp-code="ticket.otp_code" />
    </main>
    <p v-else class="text-center">Please wait...</p>
    <details v-if="ticket">
      <summary>Need Help?</summary>
      <ul>
        <li>
          Ticket Owner: <b>{{ ticket.name }}</b>
        </li>
        <li>
          Ticket Access Code: <b>{{ ticket.otp_code }}</b>
        </li>
        <li>
          Ticket Expire Time: <b>{{ ticket.end_at }}</b>
        </li>
      </ul>
    </details>
  </section>
</template>

<style scoped>
.ticket {
  background-color: var(--color-body);
  color: var(--color-dark);
}
</style>
