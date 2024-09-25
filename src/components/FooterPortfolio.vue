<template>
    <section class="py-10 flex flex-col gap-y-4 items-center bg-backgroundThird -mx-8" id="Contact">
        <h2 class="text-text text-2xl font-medium">Thuy</h2>
        <NavigationPortfolio class="text-sm" />
        <ContactPortfolio />
        <p
            class="text-xs text-gray-600 hover:text-white cursor-pointer"
            title="Click to copy"
            @click="copyText"
        >
            {{ email }}
        </p>
    </section>
</template>

<script setup>
import NavigationPortfolio from './NavigationPortfolio.vue'
import ContactPortfolio from './ContactPortfolio.vue'
import { useCopyText } from '../composable/copeText'

const { email, copyText } = useCopyText()
</script>
