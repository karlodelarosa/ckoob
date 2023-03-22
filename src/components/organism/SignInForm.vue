<template>
    <form @submit.prevent="signIn()">
        <div class="flex flex-col gap-[20px] mb-5">
            
            <div class="group">
                <label class="font-semibold text-sm text-gray-600 pb-1 block">Username</label>
                <input v-model="formData.username" :class="{ 'border-red-500' : hasError.username }" type="text" class="border  rounded-lg px-3 py-2 mt-1 text-sm w-full" />
                <p v-if="hasError.username" class="text-xs mt-1 text-red-600 font-medium italic">Username is Required</p>
            </div>
            
            <div class="group">
                <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                <input v-model="formData.password" :class="{ 'border-red-500' : hasError.password }" type="password" class="border rounded-lg px-3 py-2 mt-1 text-sm w-full" />
                <p v-if="hasError.password" class="text-xs mt-1 text-red-600 font-medium italic">Password is Required</p>
            </div>
        </div>
        <button type="submit"
            class="group transition duration-200 bg-gray-800 hover:bg-black text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span class="inline-block mr-2">Login</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="w-4 h-4 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </button>
    </form>
</template>
<script lang="ts">
import { reactive } from 'vue'

export default {
    name: 'SignInForm',
    setup() {
        const formData = reactive({
            username: '',
            password: '',
        })

        const hasError = reactive({
            username: false,
            password: false,
        })

        const errorMessage = reactive({
            username: 'Username required',
            password: 'Password required',
        })

        const signIn = () => {
            checkForm()


        }

        const checkForm = () => {
            if (formData.username !== '') {
                hasError.username = false
            } else {
                hasError.username = true
            }

            if (formData.password !== '') {
                hasError.password = false
            } else {
                hasError.password = true
            }
        }

        return {
            formData,
            signIn,
            hasError
        }
    }
}
</script>
<style lang="">
    
</style>