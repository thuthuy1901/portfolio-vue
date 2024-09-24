<template>
    <section class="relative space-y-4">
        <div class="text-text text-2xl font-medium">
            <h2>Hi! I'm Thuy</h2>
            <h2>Fresher Frontend Developer</h2>
        </div>
        <p class="text-sm text-subText max-w-96">
            I have one year of experience working with TypeScript, Tailwind, and ReactJs. About
            self-study, I studied Laravel, Angular, VueJs, NextJs, MySQL, Python and more. I am
            ready to learn anything new if given the opportunity.
        </p>
        <button class="bg-transparent border-2 border-button text-button px-4 py-1 rounded-lg">
            <a href="/Fresher_Frontend_NguyenThiThuThuy.pdf" download> Download CV </a>
        </button>
        <div class="flex gap-x-3">
            <a href="https://www.linkedin.com/in/thuthuy1901/" target="_blank">
                <img src="/linkedin.png" alt="linkedin" title="linkedin" class="size-8" />
            </a>
            <button @click="copyText">
                <img src="/gmail.png" alt="gmail" :title="`copy ${textToCopy}`" class="size-8" />
            </button>
            <a href="https://github.com/thuthuy1901" target="_blank">
                <img src="/github.png" alt="github" title="github" class="size-8" />
            </a>
        </div>
        <div class="absolute right-0 top-0">
            <img src="/banner-home.png" alt="banner-home" class="w-56" />
        </div>
    </section>
</template>

<script setup>
import { toast } from 'vue3-toastify'
const textToCopy = 'thuthuynguyen19012002@gmail.com'

const copyText = async () => {
    try {
        await navigator.clipboard.writeText(textToCopy)
        toast.success('Copy mail done')
    } catch (err) {
        toast.err('Copy mail fail')
    }
}
</script>
