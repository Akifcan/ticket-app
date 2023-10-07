
<template>
    <main class="ticket">
        <TicketHero />
        <TicketInfo />
        <TicketQr />
    </main>
</template>

<style scoped>
.ticket {
    background-color: var(--color-body);
    color: var(--color-dark);
    width: min(95%, 300px);
}
</style>