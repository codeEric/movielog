<template>
    <div class="flex items-center">
        <button class="cursor-pointer hover:text-gray-400 flex h-fit group" @click="scrollLeft">
            <ChevronLeft :size="48" class="group-hover:animate-bounce-left" />
        </button>
        <div class="flex overflow-x-hidden">
            <div ref="cardsContainer" class="flex gap-8 h-full cool-transition-overshoot"
                :style="cardsContainerTransformX">
                <Card v-for="item of data" :key="item.id" :title="item.title" :releaseYear="item.releaseYear"
                    :image="item.image" />
            </div>
        </div>
        <button class="cursor-pointer hover:text-gray-400 flex h-fit group" @click="scrollRight">
            <ChevronRight :size="48" class="group-hover:animate-bounce-lr" />
        </button>
    </div>
</template>

<script setup lang="ts">
import type { Card as CardType } from '@/interfaces/card';
import Card from '@/components/Card.vue';
import { ChevronRight, ChevronLeft } from 'lucide-vue-next';
import { onMounted, onUnmounted, reactive, ref, useTemplateRef, watch } from 'vue';

const cardsContainer = useTemplateRef('cardsContainer');
const cardsContainerTransformX = ref({ transform: 'translateX()' });
const cardsContainerLayout = reactive({
    cardWidth: 0,
    containerWidth: 0,
    gapBetweenCards: 0,
    cardsOnScreen: 0,
    scrollAmount: 0
});

watch(() => cardsContainerLayout.scrollAmount, () => {
    cardsContainerTransformX.value.transform = `translateX(${cardsContainerLayout.scrollAmount}px)`;
});

interface CarouselProps {
    data: CardType[];
}

const props = defineProps<CarouselProps>();

onMounted(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});

const handleResize = () => {
    if (!cardsContainer.value || cardsContainer.value.children.length < 2) return;
    cardsContainerLayout.cardWidth = cardsContainer.value.children[0].clientWidth;
    cardsContainerLayout.containerWidth = (cardsContainer.value.parentNode as HTMLElement).getBoundingClientRect().width;
    cardsContainerLayout.gapBetweenCards = cardsContainer.value.children[1].getBoundingClientRect().left - cardsContainer.value.children[0].getBoundingClientRect().right;
    cardsContainerLayout.cardsOnScreen = Math.ceil(cardsContainerLayout.containerWidth / (cardsContainerLayout.cardWidth + cardsContainerLayout.gapBetweenCards));
    cardsContainerLayout.scrollAmount = (cardsContainerLayout.containerWidth - (((props.data.length - cardsContainerLayout.cardsOnScreen) * (cardsContainerLayout.cardWidth + cardsContainerLayout.gapBetweenCards)))) * -1;
}

const scrollLeft = () => {
    cardsContainerLayout.scrollAmount += cardsContainerLayout.cardWidth + cardsContainerLayout.gapBetweenCards;
}

const scrollRight = () => {
    cardsContainerLayout.scrollAmount -= cardsContainerLayout.cardWidth + cardsContainerLayout.gapBetweenCards;
}

</script>

<style scoped>
.cool-transition-overshoot {
    transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}
</style>