<template>
  <div class="text-text-main h-full w-full flex">
    <main class="pt-6 px-18 w-full h-full flex flex-col">
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