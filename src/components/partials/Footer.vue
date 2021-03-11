<template>
  <div class="bg-purple-400 h-20">
    <div
      class="container mx-auto flex flex-row justify-center items-center h-full w-full "
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="tsx">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  // setup() {},
});
</script>

<style lang="css" scoped></style>
