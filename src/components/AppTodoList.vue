<template>
  <ul v-if="todos.length > 0">
    <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
  </ul>
  <h2 v-else>
    There is not todos registred
  </h2>
</template>

<script>
import { inject, } from "vue";

export default {
  name: "AppTodoList",
  setup() {
    const todos = inject("todos");

    return { todos };
  }
}
</script>
