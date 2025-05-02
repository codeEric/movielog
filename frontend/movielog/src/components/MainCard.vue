<template>
    <div class="relative w-full h-2/5 rounded-3xl flex items-center items-between">
        <img class="absolute w-full max-h-full object-cover rounded-3xl brightness-[0.3] drop-shadow-2xl shadow-xl"
            :src="image" />
        <div class="z-50 px-8">
            <div class="flex items-center mb-12">
                <h2 class="text-4xl font-bold">{{ title }}</h2>
                <span class="text-2xl font-light ms-2">({{ releaseDate }})</span>
            </div>
            <div class="my-6">
                <p class="w-2/5">
                    {{ description }}
                </p>
            </div>
            <div class="flex gap-3 mt-8">
                <button
                    class="bg-primary rounded-3xl flex items-center items-between py-2 px-5 cursor-pointer hover:bg-secondary transition-all duration-200">
                    <span class="me-2">Watch now</span>
                    <Play :size="18" fill="white" />
                </button>
                <button
                    class="bg-surface rounded-3xl flex items-center items-between py-2 px-5 cursor-pointer hover:bg-light-surface transition-all duration-200">
                    <Bookmark class="text-gold" />
                </button>
                <button
                    class="bg-surface rounded-3xl flex items-center items-between py-2 px-5 cursor-pointer hover:bg-light-surface transition-all duration-200">
                    <Eye class="text-forest-green" />
                </button>
            </div>
        </div>
        <NavigationDots class="absolute bottom-3 left-1/2 -translate-x-1/2" :dotAmount="3" :active="1" />
    </div>
</template>

<script setup lang="ts">
import { Bookmark, Eye, Play } from 'lucide-vue-next'
import NavigationDots from './NavigationDots.vue'

interface MainCardProps {
    title: string
    releaseDate: string
    description: string
    image: string
}

const props = defineProps<MainCardProps>()
</script>

<style scoped></style>
