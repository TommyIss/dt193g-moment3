<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import jpg from '@/images/main-pic.jpg?format=jpg'
import avif from '@/images/main-pic.jpg?format=avif'
import webp from '@/images/main-pic.jpg?format=webp'

</script>

<template>
  <Header />
  <main>
    <picture>
      <source :srcset="avif" type="image/avif">
      <source :srcset="webp" type="image/webp">
      <img :src="jpg" alt="Netflix-logo med bakomliggande filmer">

    </picture>
    
  </main>
  

  <Footer />
</template>

<style scoped>
  main {
    max-width: 800px;
    min-height: 400px;
    margin: 0 auto;
  }
  img {
    width: 100%;
    height: 300px;
  }
</style>
