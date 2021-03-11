<template>
  <div class="w-screen h-screen fixed bg-white top-0">
    <search-bar
      class="rounded-full m-2 overflow-hidden focus-within:border-purple-300 border-4 box-border container mx-auto"
    ></search-bar>
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
