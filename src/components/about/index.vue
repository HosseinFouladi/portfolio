<template>
  <section id="about" class="bg-[#F2F4F7] py-24 px-16 flex justify-center items-center gap-4">
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
        src="/static/images/woman.png"
        class="w-[400px] h-[400px] relative object-cover transition-all duration-500"
        :class="isHover ? ' translate-y-3' : ''"
        alt="me"
      />
    </div>
    <div class="flex flex-col gap-12">
      <h1 class="text-[48px] font-bold">Why <span class="text-orange">Hire me</span>?</h1>
      <p class="max-w-[450px] text-gray-thin">
        I have a deep understanding of frontend technologies such as HTML, CSS, and JavaScript. I keep myself updated with the latest trends and best practices in frontend development.
        I am adept at troubleshooting and finding innovative solutions to complex frontend challenges. I enjoy tackling problems and am committed to delivering high-quality, robust solutions.
        I work well in collaborative environments and communicate effectively with team members. I am open to feedback and enjoy learning from others while also sharing my knowledge and expertise.
      </p>
      <div class="flex gap-4 justify-between">
        <div class="flex flex-col gap-3">
          <span class="text-[24px] font-bold">8+</span>
          <span class="text-[18px] text-gray-thin">Project Completed</span>
        </div>
        <div class="flex flex-col gap-3">
          <span class="text-[24px] font-bold">3+</span>
          <span class="text-[18px] text-gray-thin">Years Experience</span>
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
