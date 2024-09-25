<template>
    <section class="relative pt-20">
        <div class="mx-16 p-8 pl-16 bg-backgroundSecond rounded-lg">
            <h2 class="text-text text-2xl font-medium">About me</h2>
            <ul class="text-sm text-gray-400 space-y-4">
                <li>
                    I am 22 years old and currently a fresher frontend developer working at NCC Plus
                    Company
                </li>
                <li v-for="(job, index) in listJob" :key="`job-${index}`">
                    <strong class="text-gray-300">{{ job.title }}</strong>
                    <ul class="list-disc pl-5">
                        <template v-if="!isExpanded[index]">
                            <li :key="`task-${0}`">
                                <span class="block truncate">{{ job.tasks[0] }}</span>
                            </li>
                        </template>
                        <template v-if="isExpanded[index]">
                            <li v-for="(task, taskIndex) in job.tasks" :key="`task-${taskIndex}`">
                                {{ task }}
                            </li>
                        </template>
                    </ul>
                    <button
                        v-if="job.tasks.length > 1"
                        @click="toggleExpand(index)"
                        class="text-blue-500 underline"
                    >
                        {{ isExpanded[index] ? 'See less' : 'See more' }}
                    </button>
                    <ul class="text-gray-300">
                        <li>
                            <strong>Technical Skills: </strong>
                            {{ job.skills }}
                        </li>
                        <li>
                            <a :href="job.link" target="_blank">
                                <strong>Link web: </strong>
                                <i class="text-text">{{ job.link }}</i>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <img src="/banner-about.webp" alt="banner-about" class="absolute top-24 left-0 h-60" />
    </section>
    <MySkillPortfolio />
</template>

<script setup>
import { ref } from 'vue'
import MySkillPortfolio from './MySkillPortfolio.vue'
const listJob = [
    {
        title: 'Project 1: Mezon Web Chat',
        tasks: [
            'Creating responsive HTML sites and applications from visual designs.',
            'Implementing web/mobile of frontend side with Typescript and work with the frameworks of JavaScript (ReactJS).',
            'Working closely with Product managers, Designer to better understand requirements and user experience.',
            'Integrate RESTful APIs, implement user interfaces.',
        ],
        skills: 'React.js, Typescript, Redux Toolkit, Micro Frontends, Tailwind,Flowbite,…',
        link: 'https://mezon.ai',
    },
    {
        title: 'Project 2: NCC Hiring',
        tasks: [
            'Built landing page UI using HTML/CSS, Javascripts according to Figma designs and HR specifications.',
            'Working with mvc modal when php to clone UI.',
            'Estimated and managed task completion times effectively.',
        ],
        skills: 'HTML/CSS, Javascripts, Bootstrap, php,…',
        link: 'https://career.ncc.asia',
    },
]
const isExpanded = ref(Array(listJob.length).fill(false))
function toggleExpand(index) {
    isExpanded.value[index] = !isExpanded.value[index]
}
</script>
