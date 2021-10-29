<template>
  <li class="py-4 px-6 flex items-center justify-between border-b border-back-tertiary">
    <div>
      <div class="relative w-7 h-7">
        <input
          @click="changeStatusCompleted(todo.id)"
          :checked="todo.completed"
          :id="todo.id"
          class="invisible"
          type="checkbox"
        >
        <label
          :for="todo.id"
          class="absolute top-0 left-0 w-full h-full rounded-full cursor-pointer"
        >
        </label>
      </div>
    </div>
    <p
      class="w-full px-3 text-left"
      :class="{ 'line-through text-fore-tertiary': todo.completed }"
    >
      {{ todo.title }}
    </p>
    <div>
      <button @click="removeTodo(todo.id)" class="text-fore-secondary relative w-7 h-7">
        <div class="delete-icon"></div>
      </button>
    </div>
  </li>
</template>

<script>
import { inject } from "vue";
export default {
  nmae: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    }
  },
  setup() {
    const todos = inject("todos");

    const removeTodo = id => {
      todos.value = todos.value.filter(todo => todo.id != id);
    }

    const changeStatusCompleted = id => {
      todos.value = todos.value.map(todo => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }

        return todo;
      });
    }

    return { removeTodo, changeStatusCompleted, };
  }
}
</script>
<style scoped>
  label {
    @apply bg-back-tertiary;
  }

  label::after {
    @apply absolute h-6.25 w-6.25 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2;
    @apply bg-back-secondary rounded-full;
    content: "";
  }

  label:hover {
    @apply bg-gradient-primary;
  }

  input[type="checkbox"]:checked + label {
    @apply bg-gradient-primary;
  }

  input[type="checkbox"]:checked + label:after {
    @apply bg-transparent;
    @apply w-4 h-2 border-2 border-t-0 border-r-0 rounded-none border-white;
    @apply left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1.5 -rotate-45;
  }


  /* delete icon */

  .delete-icon {
    @apply absolute inset-0 ;
  }

  .delete-icon:hover::before, .delete-icon:hover::after {
    @apply bg-gradient-primary;
  }

  .delete-icon::before {
    @apply h-full;
    @apply absolute transform -rotate-45 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2  bg-back-tertiary;
    content: '';
    width: 2px;
  }

  .delete-icon::after {
    @apply h-full;
    @apply absolute transform rotate-45 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2  bg-back-tertiary;
    content: '';
    width: 2px;
  }
</style>
