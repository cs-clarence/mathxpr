<template>
  <div>
    <div
      class="
      grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3
      gap-5 sm:gap-10
      justify-center content-center
      justify-items-center
      mx-auto
      "
    >
      <solver-preview
        v-for="i of 10"
        :key="i"
        :imgSrc="`https://picsum.photos/1280/720?random=${i}`"
        to="/"
        >Solver {{ i }}
      </solver-preview>
    </div>
  </div>
</template>

<script lang="tsx">
import { defineComponent } from "vue";
import SolverPreview from "@/components/partials/SolverPreview.vue";

export default defineComponent({
  name: "Solvers",
  components: { SolverPreview },
  // setup() {},
});
</script>

<style lang="scss" scoped></style>
