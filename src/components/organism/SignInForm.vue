<template>
    <form @submit.prevent="signIn()">
        <div class="flex flex-col gap-[20px] mb-5">

            <ErrorAlert :hasError="authError" message="Invalid credential was provided!" />
            <SuccessAlert :success="authSuccess" message="Authentication success!" />

            <template v-if="authSuccess">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 animate-spin mx-auto">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            </template>

            <template v-else>
                <div class="group">
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">Username</label>
                    <input :disabled="authSuccess" type="text" class="border  rounded-lg px-3 py-2 mt-1 text-sm w-full"
                        v-model="formData.username" :class="{ 'border-red-500': hasError.username || authError }" />
                    <p v-if="hasError.username" class="text-xs mt-1 text-red-600 font-medium italic">Username is Required
                    </p>
                </div>

                <div class="group">
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                    <input :disabled="authSuccess" v-model="formData.password"
                        :class="{ 'border-red-500': hasError.password || authError }" type="password"
                        class="border rounded-lg px-3 py-2 mt-1 text-sm w-full" />
                    <p v-if="hasError.password" class="text-xs mt-1 text-red-600 font-medium italic">Password is Required
                    </p>
                </div>
            </template>

        </div>
        <template v-if="!authSuccess">
            <button type="submit" :disabled="authSuccess" :class="{ 'pointer-events-none': authSuccess }"
                class="group transition duration-200 bg-black hover:bg-gray-800 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                <span class="inline-block mr-2">Login</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="w-4 h-4 inline-block">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
        </template>
    </form>
</template>
<script lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import User from '@/core/api/User'
import ErrorAlert from '../atom/alerts/ErrorAlert.vue'
import SuccessAlert from '../atom/alerts/SuccessAlert.vue'

export default {
    name: 'SignInForm',
    components: {
        ErrorAlert,
        SuccessAlert,
    },
    setup() {
        const router = useRouter()

        const formData = reactive({
            username: '',
            password: '',
        })

        const hasError = reactive({
            username: false,
            password: false,
        })

        const authError = ref(false)
        const authSuccess = ref(false)

        const signIn = () => {
            checkForm()
            const user = new User(formData.username, formData.password)
            const result = user.authenticate()

            if (formData.username !== '' && formData.password !== '') {
                if (result) {
                    authError.value = false
                    authSuccess.value = true

                    setTimeout(() => {
                        router.push({ name: 'Introduction' })
                    }, 3000)


                } else {
                    authError.value = true
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
            authSuccess,
        }
    }
}
</script>
<style></style>