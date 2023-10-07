<template>
    <div aria-hidden="true" class="ticket-circle">
    </div>
</template>

<style scoped>
.ticket-circle {
    --offset: 30px;
    position: absolute;
    z-index: 5;
    background-color: red;
    width: var(--offset);
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #121212;
}
</style>