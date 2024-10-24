<script setup>
import SearchBar from '../components/SearchBar.vue';
</script>

<template>
  <main>
    <search-bar v-model:search="search"></search-bar>
  </main>
</template>
<script>
export default {
  name: "HomeView.vue",
  data() {
    return {
      search: ''
    }
  }
}
</script>