<template>
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.25 29.75L29.75 12.25" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.25 12.25H29.75V29.75" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
</template>

<script setup lang="ts">
defineProps({
    color:{type:String,default:'white'}
})
</script>

<style scoped>

</style>