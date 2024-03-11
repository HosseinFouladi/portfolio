<template>
    <section id="home">
      <div class="mt-12 flex flex-col items-center gap-3 ">
        <div class="flex ">
            <Button  color="#444444" background="transparent" >Hello!</Button>
            <triple class=" -mt-4"/>
        </div>
        <h1 class=" text-[64px] font-medium text-center tracking-wider">I`m <span class=" text-orange">Hossein</span>,<br/>Product Designer</h1>
      </div>
    </section>
</template>

<script setup lang="ts">
import Button from '../utilities/button.vue';
import triple from '../icons/triple.vue';
</script>

<style scoped>

</style>