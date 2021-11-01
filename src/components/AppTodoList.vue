<template>
  <div
    class="text-fore-primary text-lg bg-back-secondary shadow-sm"
    :class="customStyles"
  >
    <ul v-if="todosFiltered.length > 0">
      <TodoListItem v-for="todo in todosFiltered" :key="todo.id" :todo="todo"/>
    </ul>
    <p v-else class="px-4 py-12 text-sm text-center md:text-lg">
      {{ emptyMessage }}
    </p>
  </div>
</template>

<script>
import { computed, inject, } from "vue";

import TodoListItem from "@/components/TodoListItem";

export default {
  name: "AppTodoList",
  components: {
    TodoListItem,
  },
  props: {
    customStyles: {
      type: String,
      default: "",
    }
  },
  setup() {
    const todos = inject("todos");
    const filterTodosBy = inject("filterTodosBy");

    const todosFiltered = computed(() => {
      const filter = {
        "completed": () => todos.value.filter(todo => todo.completed == true),
        "incomplete": () => todos.value.filter(todo => todo.completed == false),
        "all": () => todos.value,
      }

      return filter[filterTodosBy.value]();
    });

    const emptyMessage = computed(() => {
      const messages = {
        "completed": "There is not todos completed",
        "incomplete": "There is not todos incomplete",
        "all": "There is not todos registred",
      }

      return messages[filterTodosBy.value];
    });

    return { emptyMessage, todosFiltered };
  }
}
</script>
