<template>
    <ul
        :class="['flex gap-x-4 items-center text-gray-400', props.class]"
        @click="scrollToSection($event)"
    >
        <li v-for="(nav, index) in listNav" :key="`nav-${index}`" class="cursor-pointer">
            {{ nav }}
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    class: {
        type: String,
        default: '',
    },
})

const listNav = ['Home', 'About', 'Skill', 'Resume', 'Contact']

const scrollToSection = (e) => {
    const targetId = e.target.textContent.trim()
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>
