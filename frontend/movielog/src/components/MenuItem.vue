<template>
    <RouterLink :to="props.to" class="flex gap-2 items-center content-center hover:bg-gray-800 py-2 px-2 rounded-lg" :class="{'bg-dark-primary': $route.path === props.to}">
        <component v-if="icon" :is="icon" size="20" />
        <span class="tracking-wider">
            {{ props.title }} 
        </span>
    </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';


interface IMenuItemProps {
  title: string;
  to: string;
  icon: Function | null;
}


const props = defineProps<IMenuItemProps>();

</script>

<style scoped>
</style>