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
        <button
            title="Download CV"
            class="bg-transparent border-2 border-button text-button px-4 py-1 rounded-lg transition-colors duration-2000 ease-in-out hover:border-purple-500 hover:text-purple-500"
        >
            <a href="/Fresher_Frontend_NguyenThiThuThuy.pdf" download> Download CV </a>
        </button>
        <div class="flex gap-x-3">
            <template v-for="(icon, index) in icons" :key="`icon-${index}`">
                <template v-if="icon.isLink">
                    <a :href="icon.link" target="_blank">
                        <img
                            :src="icon.img"
                            :alt="icon.title"
                            :title="icon.title"
                            class="size-8 hover:opacity-80"
                        />
                    </a>
                </template>
                <template v-else>
                    <button @click="copyText">
                        <img
                            :src="icon.img"
                            :alt="icon.title"
                            :title="`copy ${textToCopy}`"
                            class="size-8 hover:opacity-80"
                        />
                    </button>
                </template>
            </template>
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

const icons = [
    {
        isLink: true,
        link: 'https://www.linkedin.com/in/thuthuy1901/',
        img: '/linkedin.png',
        title: 'linkedin',
    },
    {
        isLink: false,
        link: '',
        img: '/gmail.png',
        title: 'gmail',
    },
    {
        isLink: true,
        link: 'https://github.com/thuthuy1901',
        img: '/github.png',
        title: 'github',
    },
]
</script>
