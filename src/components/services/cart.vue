<template>

    <div class="relative w-[320px] transition-all duration-200 " @mouseover="isHover=true;" @mouseleave="isHover=false;">
        <div :class="isHover?' backdrop-blur-none transition-all duration-200 bg-orange':''"  class=" custom-path w-full  relative rounded-[30px] overflow-hidden  border-x border-y backdrop-blur-sm  border-[#bebaba]">
            <div class=" title px-[37px] py-[44px]  text-white">
                <strong class="text-2xl">{{ title }}</strong>
            </div>
            
            <div class=" pt-12 flex flex-col justify-end items-center" :class="isHover?' scale-110 transition-all duration-200':''">
                <div class="w-[230px] bg-[#757575] h-5 rounded-t-[30px]"></div>
                <div class="w-[276px] bg-[#9E9D9D] h-5 rounded-t-[30px]"></div>
      
                <img :src="src" :alt="title"  class="w-full h-[250px] object-cover rounded-t-[30px] ">
    
            </div>
    
        </div>
        <div :class="isHover?'bg-orange transition-all duration-200':'bg-[#1D2939]'" class="w-[80px] h-[80px]  rounded-full  flex justify-center items-center absolute right-0 bottom-0 z-50">
            <Arrow/>
        </div>
    </div>
    


</template>

<script setup lang="ts">
import Arrow from '../icons/arrow.vue';
import 'animate.css';
import {ref} from 'vue';
    defineProps({
        title:{type:String,default:'Web Design'},
        src:{type:String,default:'/static/images/cart.jpeg'}
    })
    const isHover=ref(false);
</script>

<style scoped>
.custom-path{
    clip-path:  polygon(0 0,100% 0,100% 75%,70% 75%,70% 100%,0 100%);
}

.title{
    border-bottom: 1px solid #bebaba;
}
</style>