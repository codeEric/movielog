<template>
    <div>
        <div class="flex justify-between">
            <h2 class="ms-4 text-3xl font-bold mb-3">{{ title }}</h2>
            <button class="flex cursor-pointer group">
                <span class="group-hover:text-primary">See All</span>
                <ChevronRight color="#999999" class="transition-transform duration-200 group-hover:animate-bounce-lr" />
            </button>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next';
interface SectionProps {
    title: string;
}

const props = defineProps<SectionProps>();
</script>

<style scoped></style>