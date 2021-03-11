<template>
  <div>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-10 justify-items-center justify-center items-center content-center mx-auto"
    >
      <solver-preview v-for="i of 3" :key="i">Solver {{ i }}</solver-preview>
    </div>
  </div>
</template>

<script lang="tsx">
import { defineComponent } from "vue";
import SolverPreview from "@/components/partials/SolverPreview.vue";

export default defineComponent({
  name: "Home",
  components: { SolverPreview },
  // setup() {},
});
</script>

<style lang="scss" scoped></style>
