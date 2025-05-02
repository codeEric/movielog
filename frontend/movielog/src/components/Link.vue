<template>
  <RouterLink :to="props.to"
    class="flex gap-2 items-center content-center transition-colors duration-75 hover:text-secondary"
    :class="{ 'text-primary': $route.path === props.to && withActive }">
    <span class="tracking-wider">
      {{ props.title }}
    </span>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

interface LinkProps {
  title: string;
  to: string;
  withActive?: boolean;
}

const props = withDefaults(defineProps<LinkProps>(), {
  withActive: true,
})
</script>

<style scoped></style>