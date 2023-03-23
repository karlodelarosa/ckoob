<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavMenu from '@/components/organism/navigation/NavMenu.vue'

</script>

<template>
  <div class="min-h-screen">
    <header>
      <NavMenu />
    </header>

    <main>
      <router-view v-slot="{ Component }">
        <transition appear enter-active-class="animate__animated animate__fadeIn">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped>

</style>
