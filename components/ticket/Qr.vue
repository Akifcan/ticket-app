<script setup lang="ts">
import { toCanvas } from 'qrcode'
const canvas = ref<HTMLCanvasElement>()

interface Props {
  otpCode: string
}

const props = defineProps<Props>()

onMounted(() => {
  toCanvas(canvas.value, props.otpCode, { width: 200 }, function (error: any) {
    // eslint-disable-next-line no-console
    if (error) console.error(error)
    // eslint-disable-next-line no-console
    console.log('success!')
  })
})
</script>

<template>
  <section class="ticket-qr">
    <TicketIconsCircle style="top: -17px; left: -15px" />
    <TicketIconsCircle style="top: -17px; right: -15px" />
    <TicketIconsCircle style="bottom: -10px; left: -15px" />
    <TicketIconsCircle style="bottom: -11px; right: -15px" />
    <canvas ref="canvas"></canvas>
  </section>
</template>

<style scoped>
.ticket-qr {
  position: relative;
  min-height: 250px;
  display: grid;
  place-items: center;
  border-top: 4px dotted var(--color-dark);
}
</style>
