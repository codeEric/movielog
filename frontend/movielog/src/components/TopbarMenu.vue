<template>
    <div class="w-full flex gap-6 justify-between">
        <h1 class="text-primary text-2xl font-bold py-2 px-6 bg-surface rounded-3xl">
            Movie <span class=text-secondary>Log</span>
        </h1>
        <div class="bg-surface flex items-center content-center py-2 px-8 rounded-3xl">
            <ul class="flex gap-8">
                <Link title="Home" to="/" />
                <Link title="Explore" to="/explore" />
                <Link title="Watched" to="/watched" />
                <Link title="Watchlist" to="/watchlist" />
            </ul>
        </div>
        <div class="flex gap-4">
            <div class="bg-surface w-full rounded-3xl flex items-center py-2 px-5">
                <input class="w-full outline-0" type="text" placeholder="Search"/>
                <Search />
            </div>
            <div class="flex">
                <button class="bg-surface rounded-3xl flex items-center items-between py-2 px-5 cursor-pointer hover:bg-light-surface transition-all duration-200">
                    <span class="text-sm">All</span>
                    <ChevronDown />
                </button>
            </div>
        </div>
        <div class="flex gap-4">
            <div class="flex content-center items-center ">
                <button class="cursor-pointer w-full h-full py-2 px-3 bg-surface rounded-3xl hover:bg-light-surface hover:text-secondary transition-all duration-200">
                    <Bell />
                </button>
            </div>
            <div class="flex">
                <button class="bg-surface rounded-3xl flex items-center items-between py-2 px-5 cursor-pointer hover:bg-light-surface transition-all duration-200">
                    <span class="text-sm">John Doe</span>
                    <ChevronDown />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next';
import { Bell } from 'lucide-vue-next';
import { ChevronDown } from 'lucide-vue-next';
import Link from './Link.vue';
</script>

<style scoped>

</style>