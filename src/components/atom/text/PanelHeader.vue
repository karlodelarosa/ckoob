<template>
    <h6 class="uppercase font-bold text-xs tracking-wider mb-[15px]">{{ text }}</h6>
</template>
<script lang="ts">
import { toRefs } from 'vue'
export default {
    name: 'PanelHeader',
    props: {
        text: {
            type: String,
            default: 'Projects'
        }
    },
    setup(props: any) {
        const { text } = toRefs(props)
    
        return {
            text,
        }
    }

}
</script>
<style lang="">
    
</style>