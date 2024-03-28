<template>
    <a :href="link" target="_blank">
        <div class="w-[630px] h-[370px]  rounded-2xl flex flex-col justify-between overflow-hidden relative " @mouseenter="handleHover" @mouseleave="handleLeave">
            <img
              :src="background"
              alt="project"
              class="absolute top-0 left-0  w-full h-full  object-fit"
            />
            <div class="absolute top-0 left-0 w-full h-full back"></div>
            <div class="flex justify-end w-full px-4 py-4">
              <div
                class="transition-all z-20 duration-250 w-16 h-16 rounded-full border-x border-y border-orange flex justify-center items-center"
                :class="isHover?'bg-orange':'bg-transparent'" 
              >
                <Arrow :color="isHover?'white':'#FD853A'" class="rotate-45 z-30" />
              </div>
            </div>
            <div  class="flex flex-col text-box gap-4 translate-y-32 px-4 py-4 w-[90%] " :class="[{'rounded-md backdrop-blur  bg-[#000000] opacity-[0.7] mx-auto':isHover},`text-box-${id}`] ">
              <h1  class="text-start font-extrabold text-[38px] text-white">{{ title }}</h1>
              <p class="text-start text-white">{{ description }}</p>
            </div>
            x
          </div>
        </a>
 
</template>

<script setup lang="ts">
import Arrow from '../icons/arrow.vue'
import gsap from 'gsap';
import {ref} from 'vue';
const timeLine=gsap.timeline();
const isHover=ref(false);


const handleHover=()=>{
    const element=document.querySelector(`.text-box-${props.id}`)
    console.log(element)
    isHover.value=true;
    timeLine.to(element,{y:36,duration:0.25,x:10})
}

const handleLeave=()=>{
    isHover.value=false;
    const element=document.querySelector(`.text-box-${props.id}`)
    timeLine.to(element,{y:144,duration:0.25,x:0})
}
const props = defineProps({
  title: { type: String, default: 'G2holding' },
  description: {
    type: String,
    default:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales'
  },
  background: { type: String, default: '/static/images/holding.png' },
  link: { type: String, default: 'https://g2-holding.com/' },
  id:{type:Number,default:1}
})
</script>

<style scoped>
.fd{
    color: rgba(101, 99, 99, 0.322);
}
.back{
  background: linear-gradient(0deg, rgba(26,25,25,1) 0%, rgba(255,255,255,0) 35%);

  
}
</style>
