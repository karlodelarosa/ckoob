<template>
        <router-link :to="{ name: buttonRedirection }" class="flex flex-row items-center gap-1 group text-gray-700 font-medium mb-[10px] transition-all duration-75 ease-in hover:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 group-hover:animate-ping">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            {{ buttonLabel }}
        </router-link>
</template>
<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
    name: 'BackButton',
    props: {
        buttonLabel: {
            type: String,
            default: 'Back button'
        },
        buttonRedirection: {
            type: String,
            default: '#'
        }
    }
}
</script>
<style lang="">
    
</style>