<script setup lang="ts">
import Qr from '~/assets/images/qr.png'
</script>

<template>
    <section class="ticket-qr">
        <TicketIconsCircle style="top: -15px; left: -15px;" />
        <TicketIconsCircle style="top: -15px; right: -15px;" />
        <TicketIconsCircle style="bottom: -10px; left: -15px;" />
        <TicketIconsCircle style="bottom: -10px; right: -15px;" />
        <img :src="Qr" alt="qr" />
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