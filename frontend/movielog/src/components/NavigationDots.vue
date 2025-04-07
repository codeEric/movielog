<template>
    <div class="flex">
        <button v-for="index in dotAmount" :key="index" class="cursor-pointer">
            <Dot :stroke-width="10" :class="{'text-primary': index === active}" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { Dot } from 'lucide-vue-next';

interface INavigationDotsProps {
    dotAmount?: number;
    active?: number;
}

const props = withDefaults(defineProps<INavigationDotsProps>(), {
    dotAmount: 3,
    active: 1
});

</script>

<style scoped>

</style>