<template>
  <main>
    <p>BASE_URL: {{ meta.BASE_URL }}</p>
    <p>API_URL: {{ meta.API_URL }}</p>
    <TheWelcome />
  </main>
</template>

<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";

const meta = {
  BASE_URL: import.meta.env.BASE_URL,
  API_URL: import.meta.env.API_URL,
};
</script>

<style lang="scss" scoped>
body,
body main {
  background-color: var(--theme-color-primary-background);
}
</style>
