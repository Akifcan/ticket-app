<script setup lang="ts">
import Hero from '~/assets/images/hero.png'
</script>

<template>
    <div class="ticket-hero">
        <TicketIconsCircle style="top: -10px; left: -10px;" />
        <TicketIconsCircle style="top: -10px; right: -10px;" />

        <img :src="Hero" alt="alt">
        <div class="ticket-hero__title">
            <h2>My Conf</h2>
            <h2>My Conf</h2>
            <h2>My Conf</h2>
        </div>
    </div>
</template>

<style scoped>
.ticket-hero {
    position: relative;
    height: 227px;
}

.ticket-hero img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.ticket-hero__title {
    position: absolute;
    inset: 0;
    padding: 1rem;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: space-between;
}

.ticket-hero__title h2 {
    color: var(--color-body);
    font-size: 19px;
    opacity: 0.7;
}

.ticket-hero__title h2:nth-child(2) {
    opacity: 1;
}
</style>