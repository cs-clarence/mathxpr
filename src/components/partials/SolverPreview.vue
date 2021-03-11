<template>
  <div
    class="rounded-md bg-purple-300 square-128 relative shadow-xl overflow-hidden"
  >
    <div
      class="bg-white h-6 md:h-10 flex flex-col justify-center md:text-lg text-center absolute bottom-0 w-full md:w-max p-3 md:rounded-tr-md shadow-xl"
      v-if="$slots.default"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="tsx">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SolverPreview",
});
</script>

<style lang="scss" scoped>
.square-128 {
  width: 128px;
  height: 128px;
  @screen md {
    width: 100%;
    height: 256px;
  }
}
</style>
