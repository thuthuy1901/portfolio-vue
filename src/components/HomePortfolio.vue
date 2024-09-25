<template>
    <section
        class="relative space-y-4 animate-fade-down animate-duration-1000 max-md:pb-24"
        id="Home"
    >
        <div class="text-text text-2xl font-medium">
            <h2>Hi! I'm Thuy</h2>
            <h2>Fresher Frontend Developer</h2>
        </div>
        <p class="text-sm text-subText max-w-96">
            I have one year of experience working with TypeScript, Tailwind, and ReactJs. About
            self-study, I studied Laravel, Angular, VueJs, NextJs, MySQL, Python and more. I am
            ready to learn anything new if given the opportunity.
        </p>
        <button
            title="Download CV"
            class="bg-transparent border-2 border-button text-button px-4 py-1 rounded-lg transition-colors duration-2000 ease-in-out hover:border-purple-500 hover:text-purple-500 animate-pulse animate-infinite"
        >
            <a href="/Fresher_Frontend_NguyenThiThuThuy.pdf" download> Download CV </a>
        </button>
        <ContactPortfolio />
        <div class="absolute right-0 top-0 max-md:top-auto max-md:bottom-0">
            <img src="/banner-home.png" alt="banner-home" class="w-56 max-lg:w-48 max-md:w-40" />
        </div>
    </section>
</template>

<script setup>
import ContactPortfolio from './ContactPortfolio.vue'
</script>
