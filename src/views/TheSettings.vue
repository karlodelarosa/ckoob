<template>
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
            <div class="flex flex-col w-full md:w-64 text-gray-700 dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0 pt-8 ">
                
                <nav class="md:block px-4 pb-4 md:pb-0 md:overflow-y-auto border-r border-gray-300">
                    <a v-for="i in selection" :key="i" class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg hover:text-white hover:bg-gray-900"
                        href="#">{{ i }}</a>

                </nav>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const selection = ['General', 'Technology', 'Account']
</script>   