<template>
  <div>
    <form @submit.prevent="">
      <p id="title">TRUTH TABLE SOLVER</p>

      <label class="w-full text-center font-bold text-lg" for="statement"
        >SYMBOLIC STATEMENT</label
      >
      <input
        id="statement"
        type="text"
        placeholder="Statement"
        name="statement"
        class="w-full ph-center text-center"
      />
      <button>GENERATE TABLE</button>
      <table>
        <thead>
          <tr>
            <th colspan="2">SYNTAX</th>
          </tr>
          <tr>
            <th colspan="1">OPERATION</th>
            <th colspan="1">SYMBOL</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) of [
              ['CONJUNCTION', '&'],
              ['DISJUNCTION', '|'],
              ['NEGATION', '!'],
              ['CONDITIONAL', '->'],
            ]"
            :key="index"
          >
            <td>
              {{ item[0] }}
            </td>
            <td>
              {{ item[1] }}
            </td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </form>
  </div>
</template>

<script lang="tsx">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TruthTableSolver",
});
</script>

<style lang="scss" scoped>
@use "solver-generic";
</style>
