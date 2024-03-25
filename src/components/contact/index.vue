<template>
  <section id="contact" class="flex flex-col gap-3 py-24 items-center">
    <h1 class="text-[48px] w-[600px] text-center font-bold">
      Have an awesome project idea? <span class="text-orange">Lets discuss </span>
    </h1>
    <div
      class="flex justify-between px-4 py-2 items-center rounded-full border-x border-y border-[#E4E7EC]"
    >
      <div class="flex gap-2 items-center">
        <a href="mailto:hosseinfouladi20@gmail.com">
          <div class="w-16 h-16 rounded-full bg-[#FFEAD5] flex justify-center items-center">
            <Email />
          </div>
        </a>
      </div>
    </div>
  </section>
  <!-- <div
    class="bg-[#FB6514] h-[147px] rounded-tl-lg w-[200%] rounded-br-lg flex flex-col justify-center"
  >
    <div class="bg-white h-16 justify-between infinite flex items-center p-2 w-full">
      <Shape />
      <span class="text-[32px] font-bold">React.js</span>
      <Shape />
      <span class="text-[32px] font-bold">Nuxt.js</span>
      <Shape />
      <span class="text-[32px] font-bold">Frontend</span>
      <Shape />
      <span class="text-[32px] font-bold">Javascript</span>
      <Shape />
      <span class="text-[32px] font-bold">Next.js</span>
      <Shape />
      <span class="text-[32px] font-bold">Nuxt.js</span>
      <Shape />
      <span class="text-[32px] font-bold">Vue.js</span>
      <Shape />
      <span class="text-[32px] font-bold">React.js</span>
    </div>
  </div> -->
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Email from '../icons/email.vue'
import Shape from '../icons/shape.vue'
import gsap from 'gsap'

onMounted(() => {
  const tl = gsap.timeline()
  tl.to('.infinite', { x: '-50%', duration:5, repeat: -1, ease: 'linear' })
})
</script>

<style scoped>
.infinite {
  rotate: -2deg;
}
</style>
