<template>
  <form @submit.prevent="addTodo">
    <div class="py-4 px-5 flex items-center w-full bg-back-secondary rounded-md">
      <div>
        <div class="relative w-6 h-6 md:w-7 md:h-7">
          <label
            for=""
            class="absolute top-0 left-0 w-full h-full rounded-full cursor-pointer"
          >
          </label>
        </div>
      </div>
      <input
        v-model.trim="todo"
        class="w-full px-3 outline-none text-fore-primary text-sm bg-back-secondary placeholder-fore-secondary md:text-lg"
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
<style scoped>
  label {
    @apply bg-back-tertiary;
  }

  label::after {
    @apply absolute h-5 w-5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2;
    @apply bg-back-secondary rounded-full;
    content: "";
  }

  label:hover {
    @apply bg-gradient-primary;
  }

  @screen md {
    label::after {
      @apply h-6 w-6;
    }
  }
</style>
