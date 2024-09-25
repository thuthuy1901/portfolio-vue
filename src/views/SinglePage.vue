<template>
    <VideoBackground />
    <section
        class="bg-background w-full max-w-page mx-auto text-white px-8 space-y-10 overflow-hidden"
    >
        <HeaderPortfolio />
        <HomePortfolio />
        <AboutPortfolio />
        <MyWorkPortfolio />
        <FooterPortfolio />
    </section>
</template>

<script setup>
import AboutPortfolio from '../components/AboutPortfolio.vue'
import FooterPortfolio from '../components/FooterPortfolio.vue'
import HeaderPortfolio from '../components/HeaderPortfolio.vue'
import HomePortfolio from '../components/HomePortfolio.vue'
import MyWorkPortfolio from '../components/MyWorkPortfolio.vue'
import VideoBackground from '../components/VideoBackground.vue'
</script>
