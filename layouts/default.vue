<template>
    <div class="wrapper">
        <slot />
    </div>
</template>

<style scoped>
.wrapper {
    min-height: 100vh;
    display: grid;
    place-items: center;
}
</style>