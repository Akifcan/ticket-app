<script setup lang="ts">
interface Props {
  title: string
}

interface Emits {
  (e: 'onClose'): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
  <dialog open>
    <b>{{ title }}</b>
    <slot />
    <button @click="$emit('onClose')">Ok</button>
  </dialog>
</template>
