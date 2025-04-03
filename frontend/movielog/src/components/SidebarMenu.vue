<template>
    <nav class="h-11/12 w-56 rounded-3xl bg-dark-secondary flex self-center">
        <div class="w-full h-full py-4">
            <h1 class="text-center text-xl font-bold mb-10">MovieLog</h1>
            <ul class="px-6 flex flex-col gap-3">
                <MenuItem v-for="item of primaryMenuItems" :title="item.title" :icon="item.icon" :key="item.title" :to="item.to" />
            </ul>

            <hr class="my-8 mx-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

            <ul class="px-6 flex flex-col gap-2">
                <MenuItem v-for="item of secondaryMenuItems" :title="item.title" :icon="item.icon" :key="item.title" :to="item.to" />
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">
import MenuItem from '../components/MenuItem.vue'
import { House, Compass, Star, Tv, User, Settings } from 'lucide-vue-next';

interface IMenuItem {
    title: string,
    icon: Function | null,
    to: string
}

const primaryMenuItems: IMenuItem[] = [
    { title: 'Home', icon: House, to: '/'},
    { title: 'Explore', icon: Compass, to: '/explore'},
    { title: 'Watched', icon: Tv, to: '/watched'},
    { title: 'Watchlist', icon: Star, to: '/watchlist'},
]

const secondaryMenuItems: IMenuItem[] = [
    { title: 'Profile', icon: User, to: '/profile'},
    { title: 'Settings', icon: Settings, to: '/settings'},
]

</script>

<style></style>