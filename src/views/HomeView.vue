<script setup lang="ts">
import BrandIcon from '@/components/icons/Brand.vue'
import SignInForm from '@/components/organism/SignInForm.vue'
import LinkedIn from '@/components/atom/button/LinkedIn.vue'
import Git from '@/components/atom/button/Git.vue'



</script>

<template>
  <main class="bg-gray-100 h-screen">
    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md flex flex-col items-center justify-center h-full">
      <h1 class="font-bold text-center text-2xl mb-5">
        <BrandIcon />
      </h1>
      <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
        <div class="px-5 py-7">
          <SignInForm />
        </div>
        <div class="py-5">
          <div class="grid grid-cols-2 gap-1">
            <div class="text-center sm:text-left whitespace-nowrap">
              <LinkedIn/>
            </div>
            <div class="text-center sm:text-right  whitespace-nowrap">
              <Git/>
            </div>
          </div>
        </div>
      </div>
  </div>
</main>
</template>

<style scoped>

</style>
