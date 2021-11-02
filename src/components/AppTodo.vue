<template>
  <div class="w-full h-full relative min-h-screen font-josefin-sans bg-back-primary">
    <div class="w-full h-72" :class="theme == 'light' ? 'bg-light' : 'bg-dark'"></div>
    <div class="absolute top-0 w-full h-full">
      <div class="max-w-xl mx-auto my-20">
        <div class="p-4">
          <!-- init head list -->
          <div class="flex justify-between mb-6">
            <h1 class="text-white text-4xl tracking-widest font-bold">TODO</h1>
            <AppButtomTheme/>
          </div>
          <!-- init head list -->

          <!-- init body list -->
          <div>
            <AppTodoForm/>
            <AppTodoList customStyles="mt-5 rounded-t-lg"/>
          </div>
          <!-- end body list -->

          <!-- init footer list -->
          <div class="flex flex-wrap justify-between items-center rounded-b-lg text-fore-secondary dark:text-fore-tertiary">
            <div class="py-4 pl-5 flex-1 flex bg-back-secondary rounded-bl-lg">
              <span class="text-sm">{{ counterTodosIncompleted }} Items left</span>
            </div>

            <div class="py-4 px-5 flex flex-1-0-full justify-center order-last rounded-lg text-sm  md:flex-none mt-4 bg-back-secondary md:mt-0 md:px-0 md:order-none md:rounded-none">
              <button
                @click="changeTodosFilter('all')"
                :class="{ 'text-accent': filterTodosBy === 'all' }"
                class="font-bold hover:text-fore-primary rounded-lg mx-2 outline-none focus:shadow-outline dark:hover:text-white"
              >
                All
              </button>
              <button
                @click="changeTodosFilter('incomplete')"
                :class="{ 'text-accent': filterTodosBy === 'incomplete' }"
                class="font-bold hover:text-fore-primary rounded-lg mx-2 outline-none focus:shadow-outline dark:hover:text-white"
              >
                Incomplete
              </button>
              <button
                @click="changeTodosFilter('completed')"
                :class="{ 'text-accent': filterTodosBy === 'completed' }"
                class="font-bold hover:text-fore-primary rounded-lg mx-2 outline-none focus:shadow-outline dark:hover:text-white"
              >
                Completed
              </button>
            </div>

            <div class="py-4 pr-5 flex-1 flex justify-end bg-back-secondary rounded-br-lg">
              <button
                @click="removeTodosCompleted"
                class="text-right hover:text-fore-primary text-sm rounded-lg mx-0 outline-none focus:shadow-outline dark:hover:text-white"
              >
                Clear completed
              </button>
            </div>
          </div>
          <!-- init footer list -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { computed, provide, ref, watchEffect, } from "vue";

import AppButtomTheme from "@/components/AppButtomTheme";
import AppTodoForm from "@/components/AppTodoForm";
import AppTodoList from "@/components/AppTodoList";

export default {
  name: "AppTodo",
  components: {
    AppButtomTheme,
    AppTodoForm,
    AppTodoList
  },
  setup() {
    const filterTodosBy = ref("all");
    let theme = getInitialTheme();
    let todos = getTodos();

    function getInitialTheme() {
      if (typeof window !== "undefined" && window.localStorage) {
        const storedPrefs = window.localStorage.getItem("color-theme");
        if (typeof storedPrefs === "string") {
          return ref(storedPrefs);
        }

        const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
        if (userMedia.matches) {
          return ref("dark");
        }
      }
 
      return ref("light");
    }

    function getTodos() {
      if (localStorage.getItem("todos")) {
        const StoredTodos = JSON.parse(localStorage.getItem("todos"));
        return ref(StoredTodos);
      }
      return ref([]);
    }

    const counterTodosIncompleted = computed(() => {
      return todos.value.filter(todo => todo.completed === false).length;
    });

    const changeTodosFilter = (filter) => {
      filterTodosBy.value = filter;
    };

    const removeTodosCompleted = () => {
      todos.value = todos.value.filter(todo => todo.completed == false);
    };

    watchEffect(() => {
      theme.value === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");

      localStorage.setItem("color-theme", theme.value);
      localStorage.setItem("todos", JSON.stringify(todos.value));
    });

    provide("todos", todos);
    provide("filterTodosBy", filterTodosBy);
    provide("theme", theme);

    return { 
      changeTodosFilter,
      counterTodosIncompleted,
      filterTodosBy,
      removeTodosCompleted,
      theme,
      todos,
    };
  },
}
</script>

<style scoped>
/* Issue */
/* https://github.com/tailwindlabs/tailwindcss/issues/2749#issuecomment-736714254 */

.bg-dark {
  @apply bg-cover bg-center;
  background-image: url('~@/assets/images/bg-mobile-dark.jpg');
}

.bg-light {
  @apply bg-cover bg-center;
  background-image: url('~@/assets/images/bg-mobile-light.jpg');
}

@screen md {
  .bg-dark {
    background-image: url('~@/assets/images/bg-desktop-dark.jpg');
  }

  .bg-light {
    background-image: url('~@/assets/images/bg-desktop-light.jpg');
  }
}
</style>
