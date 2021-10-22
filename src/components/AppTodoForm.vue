<template>
  <form @submit.prevent="addTodo">
    <div class="px-4 py-3 flex">
      <input
        v-model.trim="todo"
        class="flex-1 py-2 border-b-2 outline-none placeholder-blue-400 focus:border-green-400"
        placeholder="Create a new todo..."
        type="text"
      >
    </div>
  </form>
</template>

<script>
import { inject, ref } from "vue";

export default {
  name: "AppTodoForm",
  setup() {
    const todo = ref("");
    const todos = inject("todos");

    const addTodo = () => {
      if (todo.value.length > 3) {
        todos.value.push({
          title: todo.value,
          completed: false,
          id: Date.now(), 
        });

        todo.value =  "";
      }
    }

    return { todo, addTodo, };
  },
}
</script>
