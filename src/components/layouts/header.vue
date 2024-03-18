<script setup lang="ts">
import { ref } from 'vue'
const links = ref([
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'services', title: 'Service' },
  { id: 'resume', title: 'Resume' },
  { id: 'project', title: 'Project' },
  { id: 'contact', title: 'Contact' }
])
const scroll=(id:string)=>{
  const element=document.querySelector(`#${id}`);
  console.log(element)
  element?.scrollIntoView({behavior:'smooth'})
}
</script>

<template>
  <ul class="flex w-4/5  rounded-full justify-between items-center bg-dark mt-10 mx-auto p-2 gap-4">
    <RouterLink
      v-for="item in links"
      :to="item.id"
      
      class="text-white px-10 py-3 rounded-full cursor-pointer  font-medium"
      :key="item.id"
      active-class="bg-orange"
      @click="scroll(item.id)"
    >
      {{ item.title }}
    </RouterLink>
  </ul>
</template>

<style lang="scss">

</style>