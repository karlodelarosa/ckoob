<template>
  <ul class="flex flex-col gap-2 ">
    <li v-for="(item, id) in items" :key="id" class="w-full py-2 px-3 rounded cursor-pointer hover:bg-gray-100"
      :class="{ 'bg-black text-white hover:bg-black hover:text-white': item.is_active }">
      {{ item.name }}
    </li>
  </ul>
</template>
<script lang="ts">
import { toRefs } from 'vue'

export default {
  name: 'SideMenu',
  props: ['items'],
  setup(props: any) {
    const { items } = toRefs(props)

    return {
      items
    }
  }
}
</script>
<style lang="">
    
</style>