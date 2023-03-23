<template>
  <div class="min-h-screen">
    <header>
      <slot name="header"></slot>
    </header>

    <main>
      <slot name="default"></slot>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script lang="ts">
export default {
  name: 'BaseLayout'
}
</script>
<style scoped></style>