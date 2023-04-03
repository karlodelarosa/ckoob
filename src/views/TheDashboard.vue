<template>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div class="grid grid-cols-7 grid-flow-row gap-[25px]">
            <div class="flex flex-col gap-[20px] mb-[25px] col-span-2">
                <div v-for="i in 6" :key="i" class="flex-1 bg-gradient-to-t from-[#FEAC5E] to-[#4BC0C8] min-h-[150px] transition-all duration-75 hover:to-[#237177] rounded-2xl p-[15px]  cursor-pointer flex flex-col justify-between">
                    <div>
                        <h2 class="text-white text-4xl font-bold">89% <span class="text-sm">System health</span></h2>
                    
                        <p class="text-xl font-bold text-white">Deborah</p>
                    </div>
                    <p class="text-xs flex flex-row items-center gap-1 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>

                        Last update: 1 day ago
                    </p>
                </div>
            </div>

            <div class="bg-white rounded-2xl p-[15px] min-h-[500px] col-span-5">
                qwe
            </div>
        </div>

        
    </div>
</template>
  
<script lang="ts">
import PanelHeader from '@/components/atom/text/PanelHeader.vue'

export default {
    name: 'Dashboard',
    components: {
        PanelHeader,
    }
}
</script>

<style scoped>

</style>