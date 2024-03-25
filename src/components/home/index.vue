<template>
  <section id="home" class="px-16"  >
    <div class="mt-12 flex flex-col items-center  gap-3 position">
      <div class="flex">
        <Button color="#444444" background="transparent">Hello!</Button>
        <triple class="-mt-4" />
      </div>
      <h1 class="text-[64px] font-medium text-center tracking-wider">
        I`m <span class="text-orange">Hossein</span>,<br />Frontend Developer
      </h1>
      <triple class="rotate-180 -ml-[640px] -mt-8" :width="50" :height="50" />
    </div>
    <div class="flex justify-around items-center">
      <div class="flex experience flex-col gap-6 w-[330px]">
        <Qoutes />
        <p class="">
          Hossein`s exceptional web development,ensure our websites`s success.highly recommended
        </p>
      </div>
      <div class="flex justify-center">
        <div
          @mouseenter="setAnimation"
          @mouseleave="resetAnimation"
          class="bg-[#FEB273] w-[600px]  h-[300px] rounded-t-full flex flex-col justify-end relative"
        >
          <img
            src="/static/images/woman.png"
            alt="me"
            class="absolute w-[600px] z-20 left-1/2 -translate-x-1/2"
          />
          <img
            src="/static/images/deco.png"
            v-if="isVisible"
            class="absolute deco animate__animated animate__fadeInUp animate__faster   z-10  -bottom-[500px] h-[1000px]"
          />
          <div
            class="flex backdrop-blur-sm z-30 px-4 py-2 rounded-full  w-fit mx-auto gap-3 justify-center  mb-8 border-x border-y border-[#D0D5DD]"
          >
            <Button class="animate__animated animate__headShake " v-if="!isHover"
              ><span class="blur-none text-[24px] font-medium">Portfolio</span><Arrow />
            </Button>
            <v-btn v-else variant="text" class="text-[26px] portfolio font-medium text-white"
              >Portfolio</v-btn
            >
            <Button @mouseleave="isHover = false" class="animate__animated animate__headShake " v-if="isHover"
              ><span class="text-[24px] font-medium">Hire Me</span><Arrow />
            </Button>
            <v-btn
              v-else
              @mouseover="isHover = true"
              variant="text"
              class="text-[26px] portfolio font-medium text-white"
              >Hire Me</v-btn
            >
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-6 w-[330px] items-end stars">
        <div class="flex">
          <Star v-for="item in 5" :key="item" />
        </div>
        <p class="text-right">
          <strong class="font-bold text-[46px] tracking-wide">3 years<br/></strong>Experience
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '../utilities/button.vue'
import triple from '../icons/triple.vue'
import Qoutes from '../icons/qoutes.vue'
import Arrow from '../icons/arrow.vue'
import Star from '../icons/star.vue';


import 'animate.css'
import { gsap } from 'gsap'
const isHover = ref(false)
const isVisible = ref(false)
const tl = gsap.timeline();

const setAnimation = () => {
  isVisible.value = true
  tl.to('.experience', { y: -230, duration: 0.5 })
  tl.to('.stars', { y: -230, duration: 0.5 }, '<')
  tl.to('.position', { y: 1200, duration: 1 }, '<')
  tl.to('.deco',{ease:'power1.inOut',duration:0.5},'<')
}

const resetAnimation =() => {
  isVisible.value=false;  
  tl.to('.experience', { y: 0, duration: 0.5 })
  tl.to('.position', { y: 0, duration: 0.5 }, '<')
  tl.to('.stars', { y: 0, duration: 0.5 }, '<')
  
}

</script>

<style lang="scss">
.portfolio {
  & .v-btn__content {
    font-size: 22px;
    font-weight: 500;
  }
}
</style>
