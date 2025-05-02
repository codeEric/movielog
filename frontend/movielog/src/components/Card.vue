<template>
    <div class="max-w-64 min-w-56 h-full flex flex-col">
        <img class="object-cover rounded-xl" :src="image" />
        <div>
            <h3 class="mt-1 ms-2 text-lg font-semibold">
                {{ title }}
                <span v-if="releaseYear">({{ releaseYear }})</span>
            </h3>
        </div>
    </div>
</template>

<script setup lang="ts">
interface CardProps {
    title: string;
    releaseDate?: string;
    releaseYear?: string;
    description?: string;
    image: string;
}

const props = defineProps<CardProps>()
</script>

<style scoped></style>
