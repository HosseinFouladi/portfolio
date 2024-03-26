<template>
  <section id="projects" class="py-24 px-16 flex flex-col gap-12">
    <div class="flex justify-between items-center">
      <h1 class="text-[48px] font-bold w-[640px]">
        Lets have a look at my <span class="text-orange">Portfolio</span>
      </h1>
    </div>
    <carousel :breakpoints="breakpoints" snapAlign="start">
      <slide v-for="(slide, index) in projects" :key="index">
        <Cart
          :link="slide.link"
          :id="slide.id"
          :description="slide.description"
          :title="slide.title"
          :background="slide.background"
        />
      </slide>

      <template #addons>
        <pagination />
      </template>
    </carousel>
  </section>
</template>

<script setup lang="ts">
import Button from '../utilities/button.vue'
import Cart from './cart.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
const breakpoints = {
  // 700px and up
  320: {
    itemsToShow: 1
  },
  // 1024 and up
  600: {
    itemsToShow: 1
  },
  780: {
    itemsToShow: 1.5
  },
  // 1024 and up
  1024: {
    itemsToShow: 2
  },
  1440: {
    itemsToShow: 2
  }
}

const projects = [
  {
    link: 'https://g2-holding.com/',
    title: 'g2holding',
    background: '/static/images/holding.png',
    description:
      'I have Built g2holding project that present G2 staff and introduce all holding related websites. Slides changes when user scrolls',
    id: 1
  },
  {
    link: 'https://trick-front-fa.go2tr.work/',
    title: 'trick',
    background: '/static/images/trick.png',
    description:
      'I have designed go2trick website that accept different project in various context using Nuxt3 and tailwind',
    id: 2
  },
  {
    link: 'https://g2internship.com/',
    title: 'internship',
    background: '/static/images/internship.png',
    description: ' I have created an educational website that provide various courses for users. it has register users and signup course services.',
    id: 3
  }
]
</script>

<style></style>
