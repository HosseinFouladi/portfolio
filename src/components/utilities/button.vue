<template>
  <button
    class="flex rounded-full  items-center"
    :style="{ border: `1px solid ${color}`, color, backgroundColor: background,width,paddingBlock:paddingY,paddingInline:paddingX ,fontSize}"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  color: { type: String, default: 'white' },
  background: { type: String, default: '#FD853A' },
  width:{type:String,default:'fit-content'},
  paddingY:{type:String,default:'8px'},
  paddingX:{type:String,default:'24px'},
  fontSize:{type:String,default:''}

})
</script>

<style></style>
