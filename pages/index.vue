<script setup lang="ts"></script>

<template>
  <main class="ticket container">
    <TicketHero />
    <TicketInfo />
    <TicketQr />
  </main>
</template>

<style scoped>
.ticket {
  background-color: var(--color-body);
  color: var(--color-dark);
}
</style>
