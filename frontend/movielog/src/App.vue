<template>
  <div class="bg-background text-text-main h-screen w-screen flex">
    <main class="my-4 mx-8 w-full">
      <TopbarMenu />
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopbarMenu from './components/TopbarMenu.vue';
</script>

<style></style>