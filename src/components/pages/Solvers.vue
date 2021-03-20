<template>
  <div>
    <div
      class="
      grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3
      gap-5 sm:gap-10
      justify-center content-center
      justify-items-center
      mx-auto
      "
    >
      <solver-preview
        v-for="(solver, index) of solvers"
        :key="index"
        :prevImg="solver.previewImage"
        :icon="solver.icon"
        :to="`/solvers/${solver.path}`"
        >{{ solver.solverName }}
      </solver-preview>
    </div>
  </div>
</template>

<script lang="tsx">
import { defineComponent } from "vue";
import SolverPreview from "@/components/partials/SolverPreview.vue";
import { fetchSolverMeta } from "@/components/pages/solvers";

export default defineComponent({
  name: "Solvers",
  components: { SolverPreview },
  setup() {
    return {
      solvers: fetchSolverMeta(),
    };
  },
});
</script>

<style lang="scss" scoped></style>
