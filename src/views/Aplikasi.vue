<script setup>
import { ref, computed } from 'vue'

let id = 0

const newTodo = ref('')
const hideNotCompleted = ref(true)
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])

const filteredTodos = computed(() => {
  return hideNotCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <h1 class="text-center text-3xl font-medium py-5">List Kegiatan</h1>
  <div class="text-center">
    <form @submit.prevent="addTodo">
      <input
        class="bg-gray-50 mx-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-1/3 p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
        v-model="newTodo">
      <button
        class="my-5 text-white bg-rose-900 hover:bg-rose-500 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-900 focus:outline-none dark:focus:ring-rose-800">Tambahkan
        List</button>

    </form>
    <div class="">
      <ul class="flex-row">
        <li
          class="py-2 justify-center items-center flex text-black font-medium text-md my-3 bg-rose-200 w-1/3 mx-auto rounded-xl border border-none"
          v-for="todo in filteredTodos" :key="todo.id">
          <input
            class="mx-5 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            type="checkbox" v-model="todo.done">
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
          <button class="mx-5 text-rose-900 hover:text-rose-700" @click="removeTodo(todo)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path
                d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
              <path fill-rule="evenodd"
                d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </li>
      </ul>

    </div>
    <button class="bg-rose-900 p-2.5 border text-sm rounded-xl text-white font-medium hover:bg-rose-500"
      @click="hideNotCompleted = !hideNotCompleted">
    {{ hideNotCompleted ? 'Tampilkan Semuanya' : 'Tampilkan yang belum selesai' }}
  </button>

</div></template>

<style>.done {
  @apply line-through;
}</style>