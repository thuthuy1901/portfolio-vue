<template>
    <section class="pt-20">
        <h2 class="text-text text-2xl font-medium mb-10">Personal project</h2>
        <div class="flex justify-between space-x-4 items-stretch">
            <div
                v-for="(work, index) in works"
                :key="`work-${index}`"
                class="w-1/3 rounded-lg overflow-hidden bg-backgroundSecond flex flex-col transition-all duration-2000 ease-in-out hover:scale-110"
            >
                <img :src="work.img" :alt="work.title" class="w-full" />
                <div class="flex flex-col items-center p-3 gap-y-2 flex-1">
                    <div class="space-y-2 flex-grow">
                        <h4 class="text-center">{{ work.title }}</h4>
                        <p class="text-center text-gray-400 text-sm">{{ work.describe }}</p>
                    </div>
                    <button
                        class="bg-button hover:bg-opacity-80 text-backgroundSecond font-semibold px-4 py-1 rounded"
                    >
                        <a :href="work.link" target="_blank" rel="noopener noreferrer">
                            View project
                        </a>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const works = [
    {
        img: '/shop-book.jpg',
        title: 'Book Selling Web App',
        describe:
            'FE: html/css, Bootstrap. BE: MySQL/MariaDB. Using PHP(laravel) to work with MVC.',
        link: 'https://github.com/thuthuy1901/Laravel_8.git',
    },
    {
        img: '/text.jpg',
        title: 'App handwriting recognition',
        describe: 'Using python with library to built modal recognition text',
        link: 'https://github.com/thuthuy1901/HandwritingRecognitionVietnamese.git',
    },
    {
        img: '/shop-mange.jpg',
        title: 'Manga Selling Web App',
        describe: 'Using html/css, js to built web. Save data to local store.',
        link: 'https://github.com/thuthuy1901/webBook.git',
    },
]
</script>
