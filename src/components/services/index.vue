<template>
  <section
    id="services"
    @mouseenter="setAnimations"
    @mouseleave="resetAnimations"
    class="bg-[url('/static/images/service-bg.jpeg')] bg-cover w-full rounded-[50px] py-[116px] px-[71px] relative overflow-hidden flex flex-col gap-24"
  >
    <img
      src="/static/images/star-medium.png"
      alt="star-med"
      class="absolute -left-24 top-[100px] star-medium"
    />
    <img
      src="/static/images/star-small.png"
      alt="star-small"
      class="absolute left-1/3 top-[100px] star-small"
    />
    <img
      src="/static/images/star-big.png"
      alt="star-big"
      class="absolute star-big -right-4 -bottom-16"
    />

    <div class="flex items-center justify-between z-30">
      <h2 class="text-white text-[48px] font-medium">
        My <span class="text-orange">Services</span>
      </h2>
      <p class="max-w-[456px] text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo
        vulputate, bibendum sodales
      </p>
    </div>

    <carousel :breakpoints="breakpoints" snapAlign="start">
      <slide v-for="slide in 5" :key="slide">
        <Cart class="z-30" />
      </slide>

      <template #addons>
        <pagination />
      </template>
    </carousel>
  </section>
</template>

<script setup lang="ts">
import Cart from './cart.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import gsap from 'gsap'
let tlSmall: gsap.core.Timeline=gsap.timeline()
let tlMedium: gsap.core.Timeline=gsap.timeline()
let tlBig: gsap.core.Timeline=gsap.timeline()

const setAnimations = () => {
  
//   tlSmall = gsap.timeline()
//   tlMedium = gsap.timeline()
//   tlBig = gsap.timeline()

  tlSmall.clear();
    tlMedium.clear();
    tlBig.clear();
  //SET ANIMATION TO SMALLEST star
  tlSmall.to('.star-small', {
    x: 300,
    duration: 2,
    rotate: 90
  })
  tlSmall.to('.star-small', {
    x: 250,
    duration: 2,
    rotate: -30
  })
  tlSmall.to('.star-small', {
    x: 275,
    duration: 2,
    rotate: 10
  })
  tlSmall.to('.star-small', { x: 260, duration: 2, rotate: -5 })

  //SET ANIMATION TO medium star
  tlMedium.to('.star-medium', {
    y: 90,
    rotate: 30,
    duration: 2
  })
  tlMedium.to('.star-medium', {
    y: 40,
    rotate: -10,
    duration: 2
  })
  tlMedium.to('.star-medium', {
    y: 70,
    rotate: 5,
    duration: 2
  })
  tlMedium.to('.star-medium', { y: 50,rotate:-5, duration: 2 })

  //set Animations to biggest star
  tlBig.to('.star-big', {
    x: 70,
    y: -70,
    duration: 2
  })
  tlBig.to('.star-big', {
    x: 40,
    y: -40,
    duration: 2
  })
  tlBig.to('.star-big', {
    x: 60,
    y: -60,
    duration: 2
  })
  tlBig.to('.star-big', { x: 50, y: -50, duration: 2 })
}

const resetAnimations = () => {
    tlSmall.clear();
    tlMedium.clear();
    tlBig.clear();

    tlSmall.to('.star-small', {
    x: 0,
    duration: 2,
    rotate: -90
  })
  tlSmall.to('.star-small', {
    x: 50,
    duration: 2,
    rotate: 30
  })
  tlSmall.to('.star-small', {
    x: 30,
    duration: 2,
    rotate: -10
  })
  tlSmall.to('.star-small', { x: 40, duration: 2, rotate: -5 })

  //SET ANIMATION TO medium star
  tlMedium.to('.star-medium', {
    y: -90,
    rotate: -30,
    duration: 2
  })
  tlMedium.to('.star-medium', {
    y: -40,
    rotate: 10,
    duration: 2
  })
  tlMedium.to('.star-medium', {
    y: -70,
    rotate: -5,
    duration: 2
  })
  tlMedium.to('.star-medium', { y: -50,rotate:5, duration: 2 })

  //set Animations to biggest star
  tlBig.to('.star-big', {
    x: -20,
    y: 70,
    duration: 2
  })
  tlBig.to('.star-big', {
    x: -10,
    y: 40,
    duration: 2
  })
  tlBig.to('.star-big', {
    x: -15,
    y: 60,
    duration: 2
  })
  tlBig.to('.star-big', { x: -12, y: 50, duration: 2 })

}
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
    itemsToShow: 3
  }
}
</script>

<style lang="scss">
#services {
  & .carousel__pagination-button:hover::after,
  .carousel__pagination-button--active::after {
    background-color: #fd853a !important;
    width: 40px !important;
    border-radius: 8px !important;
    height: 10px !important;
  }

  & .carousel__pagination-button::after {
    background-color: white;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }

  & .carousel__pagination {
    margin-top: 50px;
    align-items: center;
  }
}
</style>
