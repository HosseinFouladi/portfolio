<template>
  <v-btn
    class="flex rounded-full px-6 py-2"
    :style="{ border: `1px solid ${color}`, color, backgroundColor: background }"
  >
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
defineProps({
  color: { type: String, default: 'white' },
  background: { type: String, default: '#FD853A' }
})
</script>

<style></style>
