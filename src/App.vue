<script setup lang="ts">
import Header from './components/layouts/header.vue'
import Home from './components/home/index.vue'
import Services from './components/services/index.vue'
import Experience from './components/experince/index.vue'
import About from './components/about/index.vue'
import Projects from './components/projects/index.vue'
import Contact from './components/contact/index.vue'
import Footer from './components/layouts/footer.vue'
</script>

<template>
  <v-layout class="w-full overflow-hidden flex-col">
    <div class="flex flex-col min-h-screen justify-between">
      <Header />
      <Home />
    </div>
    <Services class="z-20" />
    <Experience />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </v-layout>
</template>

<style></style>
