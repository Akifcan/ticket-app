<script setup lang="ts">
interface Props {
  title: string
  useCloseButton?: boolean
}

interface Emits {
  (e: 'onClose'): void
}

withDefaults(defineProps<Props>(), {
  useCloseButton: true
})
defineEmits<Emits>()
</script>

<template>
  <dialog open>
    <b>{{ title }}</b>
    <slot />
    <button v-if="useCloseButton" @click="$emit('onClose')">Ok</button>
  </dialog>
</template>
