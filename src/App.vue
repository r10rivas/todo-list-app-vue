<template>
  <div class="w-full h-full relative min-h-screen bg-gray-300">
    <div class="bg-down-arrow h-40"></div>
    <div class="absolute top-0 w-full h-full">
      <AppTodo/>
    </div>
  </div>
</template>

<script>
import AppTodo from "@/components/AppTodo";

export default {
  name: 'App',
  components: {
    AppTodo,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.bg-down-arrow {
  background: url('~@/assets/images/bg-desktop-light.jpg');
}
</style>
