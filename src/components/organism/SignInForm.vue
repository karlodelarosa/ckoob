<template>
    <form @submit.prevent="signIn()">
        <div class="flex flex-col gap-[20px] mb-5">
            <div v-if="authError">
                <div class="w-full bg-red-500 text-xs text-white rounded-md shadow-lg " role="alert">
                    <div class="flex p-4">
                        {{ authErrorMessage }}
                    </div>
                </div>
            </div>
            <div class="group">
                <label class="font-semibold text-sm text-gray-600 pb-1 block">Username</label>
                <input v-model="formData.username" :class="{ 'border-red-500': hasError.username }" type="text"
                    class="border  rounded-lg px-3 py-2 mt-1 text-sm w-full" />
                <p v-if="hasError.username" class="text-xs mt-1 text-red-600 font-medium italic">Username is Required</p>
            </div>

            <div class="group">
                <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                <input v-model="formData.password" :class="{ 'border-red-500': hasError.password }" type="password"
                    class="border rounded-lg px-3 py-2 mt-1 text-sm w-full" />
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
import { ref, reactive } from 'vue'
import User from '@/core/api/User'

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

        const authError = ref(false)
        const authErrorMessage = ref('')

        const signIn = () => {
            checkForm()
            const user = new User(formData.username, formData.password)
            const result = user.authenticate()

            if (formData.username !== '' && formData.password !== '') {
                if (result) {
                    console.info('redirect to dashboard')
                } else {
                    authError.value = true
                    authErrorMessage.value = 'Invalid credential was provided!'
                    throw new Error(authErrorMessage.value)
                }
            }
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
            hasError,
            authError,
            authErrorMessage,
        }
    }
}
</script>
<style lang="">
    
</style>