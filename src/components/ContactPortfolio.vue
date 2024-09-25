<template>
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
                        :title="`copy ${email}`"
                        class="size-8 hover:opacity-80"
                    />
                </button>
            </template>
        </template>
    </div>
</template>

<script setup>
import { useCopyText } from '../composable/copeText'

const { email, copyText } = useCopyText()

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
