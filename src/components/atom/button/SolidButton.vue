<template>
    <button
        class="w-full min-h-[40px] flex flex-row gap-2 items-center leading-none justify-center rounded py-2"
        :class="buttonClass"
    >
        <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg> -->
        <slot name="icon"></slot>
        {{ text }}
    </button>
</template>
<script lang="ts">
import { ref, toRefs } from 'vue'

export default {
    name: 'SolidButton',
    props: {
        text: {
            type: String,
            default: 'Button Text'
        },
        buttonType: {
            type: String,
            default: 'success'
        }
    },
    setup(props: any) {
        const { 
            text, 
            buttonType 
        } = toRefs(props)

        const buttonClass = ref('')

        switch(buttonType.value) {
            case 'success':
                buttonClass.value = 'bg-green-500 hover:bg-green-400 text-white'
                break
            case 'warning':
                buttonClass.value = 'bg-yellow-500 hover:bg-yellow-400 text-white'
                break
            case 'error':
                buttonClass.value = 'bg-red-500 hover:bg-red-400 text-white'
                break
            case 'neutral':
                buttonClass.value = 'bg-gray-400 hover:bg-gray-300 text-gray-700'
                break
            default:
                break
        }


        return {
            text,
            buttonClass
        }
    }
}
</script>
<style lang="">
    
</style>