<script setup lang="ts">
import { ref } from 'vue'
// const bipEvenet=ref(null);
const links = ref([
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'services', title: 'Service' },
  { id: 'resume', title: 'Resume' },
  { id: 'projects', title: 'Project' },
  { id: 'contact', title: 'Contact' }
])
const scroll=(id:string)=>{
  const element=document.querySelector(`#${id}`);
  console.log(element)
  element?.scrollIntoView({behavior:'smooth'})
}

// window.addEventListener("beforeinstallprompt",event=>{
//   bipEvenet.value=event;
//   if(bipEvenet.value){
//     document.querySelector("#install-btn")?.classList.remove("hidden");
//   }
// })
// const install=()=>{
//   if(bipEvenet.value){
//     bipEvenet.value?.prompt();
//   }else{
//     document.querySelector("#install-btn")?.classList.add("hidden");
//   }
// }
</script>

<template>
  <ul class="flex w-4/5  rounded-full justify-between items-center bg-dark mt-10 mx-auto p-2 gap-4">

    <button id="install-btn " class="text-white hidden" >install</button>
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