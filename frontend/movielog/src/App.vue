<template>
  <div class="bg-dark-primary text-white h-screen w-screen flex px-6 py-2">
    <SidebarMenu />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import SidebarMenu from './components/SidebarMenu.vue'
</script>

<style></style>