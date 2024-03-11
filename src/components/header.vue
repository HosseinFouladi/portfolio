<script setup lang="ts">
import { ref } from 'vue'
const links = ref([
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'service', title: 'Service' },
  { id: 'resume', title: 'Resume' },
  { id: 'project', title: 'Project' },
  { id: 'contact', title: 'Contact' }
])
</script>

<template>
  <ul class="flex w-4/5 rounded-full justify-between items-center bg-dark mt-10 mx-auto p-2 gap-4">
    <router-link
      v-for="item in links"
      :id="item.id"
      :to="item.id"
      class="text-white px-10 py-3 rounded-full bg-orange font-medium"
      :key="item.id"
      active-class="active-class"
      
    >
      {{ item.title }}
    </router-link>
  </ul>
</template>

<style lang="scss">
.active-class{
  background-color: red  !important;
}
</style>