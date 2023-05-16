<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="text-center pt-5">
      <nav>
        <div class="inline-flex rounded-md shadow-sm" role="group">
          <RouterLink to="/"
            class="px-4 py-2 text-sm font-medium text-rose-900 bg-transparent border border-rose-900 rounded-l-lg hover:bg-rose-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-rose-500 focus:bg-rose-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-rose-700 dark:focus:bg-rose-700">
            Home
          </RouterLink>
          <RouterLink to="/aplikasi"
            class="px-4 py-2 text-sm font-medium text-rose-900 bg-transparent border border-rose-900 rounded-r-md hover:bg-rose-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-rose-500 focus:bg-rose-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-rose-700 dark:focus:bg-rose-700">
            MyApp
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav a.router-link-exact-active {
  @apply bg-rose-900;
  @apply text-white;
}

nav a.router-link-exact-active:hover {

}
</style>
