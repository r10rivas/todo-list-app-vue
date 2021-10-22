<template>
  <div class="bg-red-700 max-w-xl mx-auto my-20">
    <div class="p-4">
      <div class="flex justify-between mb-6">
        <h1>Todo</h1>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
      </div>
      <AppTodoForm/>
      <AppTodoList/>
    </div>
  </div>
</template>

<script>

import { provide, ref, } from "vue";

import AppTodoForm from "@/components/AppTodoForm";
import AppTodoList from "@/components/AppTodoList";

export default {
  name: "AppTodo",
  components: {
    AppTodoForm,
    AppTodoList
  },
  setup() {
    const todos = ref([]);

    provide("todos", todos);
  },
}
</script>
