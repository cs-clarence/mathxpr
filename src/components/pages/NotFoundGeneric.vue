<template>
  <div class="flex flex-col justify-center items-center h-full">
    <div
      class="
      not-found bg-red-500 rounded text-white p-10 flex flex-col justify-center
      items-center max-w-xs
      "
    >
      <span class="mb-5">Page Not Found: {{ $route.fullPath }}</span>
      <img src="../../assets/images/warning.svg" alt="warning" />
    </div>
  </div>
</template>

<script lang="tsx">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFoundGeneric",
  // setup() {},
});
</script>

<style lang="scss" scoped></style>
