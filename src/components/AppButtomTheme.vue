<template>
  <button @click="chengeTheme" class="text-white">
    <svg
      v-if="theme == 'light'"
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
    <svg
      v-else
      class="h-8 w-8"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  </button>
</template>

<script>
import { inject, } from 'vue';
export default {
  name:"AppButtomTheme",
  setup () {
    const theme = inject("theme");

    const chengeTheme = () => {
      theme.value = theme.value == 'light' ? 'dark' : 'light';
    };

    return { chengeTheme, theme }
  }
}
</script>

<style>

</style>