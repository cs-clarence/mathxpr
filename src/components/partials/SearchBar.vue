<template>
  <div
    class="
    background sm:container rounded-full m-2 overflow-hidden 
    focus-within:border-purple-300 border-4 mx-4 sm:mx-auto
    "
  >
    <form
      class="p-3 flex flex-row justify-center items-center text-base"
      @submit.prevent=""
    >
      <label for="search-bar">
        <img
          src="../../assets/images/magnifying-glass.svg"
          alt="magnifying glass"
        />
      </label>
      <input
        @input="
          $emit('update:modelValue', $event.target.value),
            $emit('input', $event.target.value)
        "
        :value="modelValue"
        id="search-bar"
        type="text"
        placeholder="Search"
        class="bg-transparent text-white w-full h-full ml-3 focus:outline-none"
        autocomplete="off"
      />
    </form>
  </div>
</template>

<script lang="tsx">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "SearchBar",
  emits: {
    "update:modelValue": null,
    input: null,
  },
  props: {
    modelValue: {
      type: String as PropType<string>,
      required: false,
      default: "",
    },
  },
  // setup() {},
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
