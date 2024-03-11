<template>
  <section id="home">
    <div class="mt-12 flex flex-col items-center gap-3">
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
      <div class="flex flex-col gap-6 w-[330px]">
        <Qoutes />
        <p class="">
          Hossein`s exceptional web development,ensure our websites`s success.highly recommended
        </p>
      </div>
      <div class="flex justify-center">
        <div class="bg-[#FEB273] w-[600px] h-[300px] rounded-t-full flex flex-col justify-end relative">
          <img
            src="/static/images/young-pretty-woman-looking-happy-goofy-with-broad-fun-loony-smile-eyes-wide-open-against-white-wall 3.png"
            alt="me"
            class="absolute w-[600px]  left-1/2 -translate-x-1/2 "
          />
          <div class="flex px-4 py-2 rounded-full w-fit mx-auto  gap-3 justify-center blur-sm mb-8 border-x border-y border-[#D0D5DD]">
            <Button  class="" v-if="!isHover" ><span class=" blur-none text-[24px] font-medium">Portfolio</span><Arrow/> </Button>
            <v-btn v-else variant="text" class="text-[26px] portfolio font-medium text-white" >Portfolio</v-btn>
            <Button @mouseleave="isHover=false"  class="" v-if="isHover" ><span class=" text-[24px] font-medium">Hire Me</span><Arrow/> </Button>
            <v-btn v-else @mouseover="isHover=true"  variant="text" class="text-[26px] portfolio font-medium text-white" >Hire Me</v-btn>
          </div>
        </div>
        
      </div>
      <div class="flex flex-col gap-6 w-[330px] items-end">
        <div class="flex ">
          <Star v-for="item in 5" :key="item"/>
        </div>
        <p class="text-right">
          <h1 class="font-bold text-[46px] tracking-wide">3 years</h1>Experience
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import Button from '../utilities/button.vue'
import triple from '../icons/triple.vue'
import Qoutes from '../icons/qoutes.vue'
import Arrow from '../icons/arrow.vue'
import Star from '../icons/star.vue'



const isHover=ref(false);
</script>

<style lang="scss" >
.portfolio{
  & .v-btn__content{
    font-size: 22px; 
  font-weight: 500;
  }
}
</style>
