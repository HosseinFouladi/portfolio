<template>
  <section class="bg-dark py-6 px-16">
    <div class="flex justify-between w-full border-b-[#475467] border-b pb-12">
      <h1 class="text-white text-[42px]">Lets Connect there</h1>
      <Button font-size="22px">Hire Me <Arrow /></Button>
    </div>
    <div class="p-12 justify-between flex gap-8 border-b">
      <div class="flex flex-col gap-12">
        <div class="flex items-center gap-2">
          <div
            class="w-12 h-12 rounded-full flex justify-center items-center text-white font-extrabold text-[24px] bg-orange"
          >
            HF
          </div>
          <span class="text-white font-extrabold text-[24px]"> HOSSEIN </span>
        </div>
        <p class="text-white">dvfjhknsflmvhjdfbnskjflkmnveihwjsln jknfa</p>
        <div class="flex gap-8 items-center">
          <a href="https://linkedin.com/in/hossein-fouladi-215392221">
            <Linkedin />
          </a>
          <a href="https://t.me/Hossein796">
            <Whatsapp />
          </a>
          <a href=" https://github.com/HosseinFouladi">
            <Github />
          </a>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <span class=" text-light-orange mb-2 font-bold text-xl">Navigation</span>
        <div class="grid grid-rows-2 grid-cols-2 gap-6">
            <RouterLink class="text-white font-bold" v-for="link in links" :key="link.id" :to="link.id" @click="scroll(link.id)">{{ link.title }}</RouterLink>

        </div>
      </div>

      <div class="flex flex-col gap-6">
        <span class=" text-light-orange mb-2 font-bold text-xl">Contact</span>
            <strong class="text-white">+98 9147673523</strong>
            <strong class="text-white">hosseinfouladi20@gmail.com </strong>

            <strong class="text-white"> Portfolio-jcrea.com</strong>

      </div>
    </div>
    <div class="flex justify-between py-4">
        <p class="text-white">Copyright© 2024 Hossein Fouladi. All Rights Reserved.</p>
        <p class="text-white">User Terms & Conditions | Privacy Policy</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Arrow from '../icons/arrow.vue'
import Button from '../utilities/button.vue'
import Linkedin from '../icons/linkedin.vue'
import Whatsapp from '../icons/whatsapp.vue'
import Github from '../icons/github.vue'

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
</script>

<style scoped>
.border-b {
  border-block-end-color: #475467 !important;
}
</style>
