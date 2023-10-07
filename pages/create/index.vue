<script setup lang="ts">
import { NewTicketDto } from '~/components/ticket/types'

const formRef = ref<HTMLFormElement>()
const supabase = useSupabase()
const otp = useOtp()

const isLoading = ref(false)
const result = ref<string>()

const handleSubmit = async () => {
  const formData = new FormData(formRef.value)
  const body = Object.fromEntries(formData) as unknown as NewTicketDto
  try {
    const { error } = await supabase.from('customer').insert({
      name: body.customerName,
      start_at: body.startDate,
      time: body.startTime,
      otp_code: otp(),
      end_at: body.endDate,
      location: body.location
    })
    if (error) {
      result.value = 'Please try again an unexcepted error occured'
      return
    }
    result.value = 'This record added'
  } catch (e) {
    // console.log(e)
    result.value = 'Please try again an unexcepted error occured'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <Dialog v-if="result ? true : false" title="Create a ticket" @onClose="result = undefined">
    <p>{{ result }}</p>
  </Dialog>
  <form ref="formRef" class="container flex column" style="--gap: 1rem" @submit.prevent="handleSubmit">
    <FormGroup id="customer-name" title="Customer Name">
      <input name="customerName" id="customer-name" required />
    </FormGroup>
    <FormGroup id="start-date" title="Start Date">
      <input id="start-date" name="startDate" type="date" required />
    </FormGroup>
    <FormGroup id="end-date" title="End Date">
      <input id="end-date" name="endDate" type="date" required />
    </FormGroup>
    <FormGroup id="start-time" title="Start Time">
      <input id="start-time" name="startTime" type="time" required />
    </FormGroup>
    <FormGroup id="location" title="location">
      <input id="location" name="location" required />
    </FormGroup>
    <button :disabled="isLoading" type="submit">Submit</button>
  </form>
</template>
