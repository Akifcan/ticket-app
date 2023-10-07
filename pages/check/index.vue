<script setup lang="ts">
import { CheckTicket } from '~/components/ticket/types'

const supabase = useSupabase()
const videoRef = ref<HTMLVideoElement>()
const ticketCode = ref('')
const isCameraOpen = ref(false)
const result = ref<string | CheckTicket | undefined>('')
const isLoading = ref(false)

const checkTicket = async (otpCode: string) => {
  const nowDate = new Date().toISOString().split('T')[0]
  try {
    isLoading.value = true
    const { data, error } = await supabase
      .from('customer')
      .select('otp_code, is_active, name, end_at')
      .eq('is_active', true)
      .eq('otp_code', otpCode)
      .gte('end_at', nowDate)
    if (error) {
      result.value = 'Unexcepted error occured'
      return
    }
    if (!data.length) {
      result.value = 'This ticket was not found'
      return
    }
    const ticket = data[0]
    result.value = ticket
  } catch (e) {
    result.value = 'Unexcepted error occured'
  } finally {
    isLoading.value = false
  }
}

const handleCamera = async () => {
  if (!videoRef.value) {
    return
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true
    })
    isCameraOpen.value = true
    videoRef.value.srcObject = stream
    videoRef.value.play()
  } catch (e) {
    result.value = 'Please give camera permission'
  }
}
</script>

<template>
  <section class="flex column container" style="--gap: 1rem">
    <Dialog v-if="result" title="Ticket Control" @on-close="result = undefined">
      <ul v-if="typeof result === 'object'">
        <li>
          Ticket Owner: <b>{{ result.name }}</b>
        </li>
        <li>
          Ticket OTP Code: <b>{{ result.otp_code }}</b>
        </li>
        <li>
          Ticket Expire Time: <b>{{ result.end_at }}</b>
        </li>
      </ul>
      <p v-else>{{ result }}</p>
    </Dialog>
    <form class="container flex column full-width" style="--gap: 1rem" @submit.prevent="checkTicket(ticketCode)">
      <FormGroup id="ticket-code" title="Bilet Kodu">
        <input v-model="ticketCode" type="search" required maxlength="10" placeholder="Enter ticket or scan qr..." />
        <button :disabled="isLoading">Check Ticket</button>
      </FormGroup>
    </form>
    <div class="flex column" style="--gap: 1rem">
      <video v-show="isCameraOpen" ref="videoRef" class="full-width"></video>
      <button v-if="!isCameraOpen" class="open-camera-button" @click="handleCamera">Open Camera</button>
    </div>
  </section>
</template>

<style scoped>
video {
  background-color: var(--color-body);
  border-radius: 1rem;
}
.open-camera-button {
  background-color: blue;
  cursor: pointer;
}
</style>
