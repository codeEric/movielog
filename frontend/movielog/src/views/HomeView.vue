<template>
    <div class="mt-8 flex flex-col h-full">
        <MainCard class="mb-12" title="First frost" releaseDate="2025"
            description="Wen Yifan, by chance, ends up living with her high school classmate Sang Yan, whom she once rejected. They keep their distance until Wen Yifan learns from Sang Yan that she sleepwalks, intertwining their lives once more."
            image="https://image.tmdb.org/t/p/original/hVc65skTNUqjIoZwr4EgJoviD6b.jpg" />
        <Section title="Dramas">
            <Carousel :data="data" />
        </Section>
    </div>
</template>

<script setup lang="ts">
import MainCard from '@/components/MainCard.vue'
import Section from '@/components/Section.vue'
import Carousel from '@/components/Carousel.vue';
import type { Card } from '@/interfaces/card';

const data: Card[] = [
    {
        id: '1',
        title: 'Sweet Home 1',
        releaseYear: '2020',
        image: "https://image.tmdb.org/t/p/original/zcugNxDg59YwIf3dUHsrHmO7pc1.jpg"
    },
    {
        id: '2',
        title: 'Sweet Home 2',
        releaseYear: '2020',
        image: "https://image.tmdb.org/t/p/original/zcugNxDg59YwIf3dUHsrHmO7pc1.jpg"
    },
    {
        id: '3',
        title: 'Sweet Home 3',
        releaseYear: '2020',
        image: "https://image.tmdb.org/t/p/original/zcugNxDg59YwIf3dUHsrHmO7pc1.jpg"
    },
    {
        id: '4',
        title: 'Sweet Home 4',
        releaseYear: '2020',
        image: "https://image.tmdb.org/t/p/original/zcugNxDg59YwIf3dUHsrHmO7pc1.jpg"
    },
    {
        id: '5',
        title: 'Sweet Home 5',
        releaseYear: '2020',
        image: "https://image.tmdb.org/t/p/original/zcugNxDg59YwIf3dUHsrHmO7pc1.jpg"
    },
    {
        id: '6',
        title: 'Sweet Home 6',
        releaseYear: '2020',
        image: "https://image.tmdb.org/t/p/original/zcugNxDg59YwIf3dUHsrHmO7pc1.jpg"
    },
    {
        id: '7',
        title: 'Sweet Home 7',
        releaseYear: '2020',
        image: "https://image.tmdb.org/t/p/original/zcugNxDg59YwIf3dUHsrHmO7pc1.jpg"
    },
    {
        id: '8',
        title: 'Sweet Home 8',
        releaseYear: '2020',
        image: "https://image.tmdb.org/t/p/original/zcugNxDg59YwIf3dUHsrHmO7pc1.jpg"
    },
    {
        id: '9',
        title: 'Sweet Home 9',
        releaseYear: '2020',
        image: "https://image.tmdb.org/t/p/original/zcugNxDg59YwIf3dUHsrHmO7pc1.jpg"
    },
    {
        id: '10',
        title: 'Sweet Home 10',
        releaseYear: '2020',
        image: "https://image.tmdb.org/t/p/original/zcugNxDg59YwIf3dUHsrHmO7pc1.jpg"
    }
]

</script>

<style></style>
