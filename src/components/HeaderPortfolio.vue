<template>
    <header class="flex justify-between items-center py-4 animate-fade animate-duration-1000">
        <p class="text-text font-semibold text-xl">Thuy</p>
        <NavigationPortfolio class="max-md:hidden" />
        <img src="/menu.png" alt="menu" class="size-10 hidden max-md:block" />
    </header>
</template>

<script setup>
import NavigationPortfolio from './NavigationPortfolio.vue'
</script>
