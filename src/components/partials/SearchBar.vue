<template>
  <div class="background container mx-auto">
    <form class="p-3 flex flex-row justify-center items-center text-base">
      <label for="search-bar">
        <img
          src="../../assets/images/magnifying-glass.svg"
          alt="magnifying glass"
        />
      </label>
      <input
        id="search-bar"
        type="text"
        placeholder="Search"
        class="bg-transparent text-white w-full h-full ml-3"
        autocomplete="off"
      />
    </form>
  </div>
</template>

<script lang="tsx">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBar",
});
</script>

<style lang="scss" scoped>
.background {
  background-color: rgba(black, 0.25);
}
#search-bar::placeholder {
  color: rgba(white, 0.5);
}
</style>
