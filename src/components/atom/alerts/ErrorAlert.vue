<template>
    <div v-if="hasError">
        <div class="w-full bg-red-500 text-xs text-white rounded-md shadow-lg " role="alert">
            <div class="flex p-4">
                {{ message }}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { toRefs } from 'vue'

export default {
    name: 'ErrorAlert',
    props: {
        hasError: {
            type: Boolean,
            default: false
        },
        message: {
            type: String,
            default: 'Error occured!'
        }
    },
    setup(props: any) {
        const {
            hasError,
            message
        } = toRefs(props)

        return {
            hasError,
            message
        }
    }
}
</script>
<style lang="">
    
</style>