<script setup lang="ts">
interface Props {
    title: string
    id: string
}
defineProps<Props>()
</script>

<template>
    <div class="form-group">
        <label :for="id">{{ title }}</label>
        <slot />
    </div>
</template>

<style scoped>
.form-group {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

label {
    font-size: 18px;
    text-align: start;
}
</style>