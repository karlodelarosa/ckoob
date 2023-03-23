<template>
    <div v-if="success">
        <div class="w-full bg-green-500 text-xs text-white rounded-md shadow-lg " role="alert">
            <div class="flex p-4">
                {{ message }}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { toRefs } from 'vue'

export default {
    name: 'SuccessAlert',
    props: {
        success: {
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
            success,
            message
        } = toRefs(props)

        return {
            success,
            message
        }
    }
}
</script>
<style lang="">
    
</style>