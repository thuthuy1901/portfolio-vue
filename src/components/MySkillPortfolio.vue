<template>
    <section class="pt-20" id="Skill">
        <h3 class="text-xl font-normal mb-10">My skills</h3>
        <div class="flex justify-between flex-wrap gap-y-4 max-sm:flex-col">
            <div
                v-for="(skill, index) in skills"
                :key="`skill-${index}`"
                :class="`flex flex-col items-center gap-y-2 w-1/3 max-sm:w-full hover:animate-wiggle animate-duration-1000 ${index + 1 === numSkills ? 'max-md:w-full' : 'max-md:w-1/2'}`"
            >
                <img :src="skill.img" :alt="skill.title" class="size-32" />
                <h3 class="text-text font-medium">{{ skill.title }}</h3>
                <p class="text-gray-400 text-center text-sm">{{ skill.describe }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
const skills = [
    {
        img: '/tool.png',
        title: 'Tools',
        describe: 'Git Bash, Visual Studio, Android Studio, Docker.',
    },
    {
        img: '/lib.png',
        title: 'Frameworks/Libraries',
        describe: 'React.js, Vue.js, Angular, Laravel, Flutter, NextJS.',
    },
    {
        img: '/lang.png',
        title: 'Programming Languages',
        describe: 'JavaScript, TypeScript, HTML/CSS, PHP, Python, Dart, C/C++.',
    },
]
const numSkills = skills.length
</script>
