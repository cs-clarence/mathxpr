<template>
  <div class="w-screen h-screen fixed bg-white top-0">
    <search-bar></search-bar>
  </div>
</template>

<script lang="tsx">
import { defineComponent } from "vue";
import SearchBar from "@/components/partials/SearchBar.vue";
export default defineComponent({
  name: "Menu",
  components: { SearchBar },
});
</script>

<style scoped></style>
