<template>
  <section class="bg-[#F2F4F7] py-24 px-16 flex justify-center items-center gap-4">
    <div
      class="relative flex justify-center items-end"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
    >
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[350px] rounded-[42px] bg-light-orange"
      >
        <Circles
          v-if="isHover"
          class="absolute animate__animated animate__fadeIn animate__fast left-1/2 -translate-x-1/2 -top-24"
        />
      </div>
      <img
        src="/static/images/young-pretty-woman-looking-happy-goofy-with-broad-fun-loony-smile-eyes-wide-open-against-white-wall 3.png"
        class="w-[400px] h-[400px] relative object-cover transition-all duration-500"
        :class="isHover ? ' translate-y-3' : ''"
        alt="me"
      />
    </div>
    <div class="flex flex-col gap-12">
      <h1 class="text-[48px] font-bold">Why <span class="text-orange">Hire me</span>?</h1>
      <p class="max-w-[450px] text-gray-thin">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo
        vulputate, bibendum sodales
      </p>
      <div class="flex gap-4 justify-between">
        <div class="flex flex-col gap-3">
          <span class="text-[24px] font-bold">450+</span>
          <span class="text-[18px] text-gray-thin">Project Completed</span>
        </div>
        <div class="flex flex-col gap-3">
          <span class="text-[24px] font-bold">450+</span>
          <span class="text-[18px] text-gray-thin">Project Completed</span>
        </div>
      </div>
      <Button
        @mouseleave="
          background = 'transparent';
          color = '#151515'
        "
        @mouseenter="
          background = '#151515';
          color = 'white'
        "
        :background="background"
        font-size="22px"
        :color="color"
        padding-x="45px"
        padding-y="20px"
        class="transition-all duration-500"
        >Hire Me</Button
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import 'animate.css'
import { ref } from 'vue'
import Button from '../utilities/button.vue'
import Circles from '../icons/circles.vue'

const background = ref('transparent')
const color = ref('#151515')

const isHover = ref(false)
</script>

<style scoped></style>
