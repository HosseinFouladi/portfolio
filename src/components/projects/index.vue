<template>
    <section id="projects" class="py-25 px-16 flex flex-col gap-12">
        <div class="flex justify-between items-center">
            <h1 class="text-[48px] font-bold w-[640px]">Lets have a look at my <span class="text-orange">Portfolio</span></h1>
            <Button>See All</Button>
        </div>
        <carousel :breakpoints="breakpoints" snapAlign="start">
            <slide v-for="(slide,index) in projects" :key="index">
              <Cart :link="slide.link" :id="slide.id"/>
            </slide>
      
            <template #addons>
              <pagination />
            </template>
          </carousel>
    </section>
</template>

<script setup lang="ts">
import Button from '../utilities/button.vue';
import Cart from './cart.vue';
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
    itemsToShow:2
  }
}

const projects=[
    {
    link:'https://g2-holding.com/',
    title:'g2holding',
    background:'',
    description:'',
    id:1
},
{
    link:'https://g2-holding.com/',
    title:'g2holding',
    background:'',
    description:'',
    id:2
},
{
    link:'https://g2-holding.com/',
    title:'g2holding',
    background:'',
    description:'',
    id:3
}
]
</script>

<style >

</style>