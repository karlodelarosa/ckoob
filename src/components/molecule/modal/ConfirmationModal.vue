<template>
    <div v-if="false" class="fixed w-full h-screen bg-black/50 top-0 left-0 flex items-center justify-center">
        <div class="sm:w-full md:w-1/3 xl:w-1/4 rounded-lg shadow-lg bg-white my-3">
            <div class="flex justify-between border-b border-gray-100 px-5 py-4">
                <div class="flex flex-row gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-yellow-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>

                <span class="font-bold text-gray-700 text-lg">{{ modalTitle }}</span>
                </div>
                <div>
                    <button class="group ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="group-hover:text-red-600 transition-all w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>
                </div>
            </div>
        
            <div class="px-10 py-5 text-gray-600">
                {{ modalMessage }}
            </div>
        
            <div class="px-5 py-4 flex justify-end w-1/2 ml-auto gap-[15px]">
            <button class="text-sm py-2 px-3 text-gray-700 hover:text-gray-500 transition duration-150">Close</button>
            <SolidButton
                    text="Save" 
                    buttonType="success"
            />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { toRefs, computed } from 'vue'
import SolidButton from '@/components/atom/button/SolidButton.vue'

export default {
    name: 'ConfirmationModal',
    components: {
        SolidButton
    },
    props: {
        modalTitle: {
            type: String,
            default: 'Confirm Modal'
        },
        modalMessage: {
            type: String,
            default: 'Are you sure you want to save?'
        }
    },
    setup(props: any) {
        const { modalTitle, modalMessage } = toRefs(props)

        return {
            modalTitle,
            modalMessage,
        }
    }
}
</script>
<style lang="">
    
</style>