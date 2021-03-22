<template>
  <div>
    <form @submit.prevent="">
      <p id="title">APPORTIONMENT</p>
      <fieldset>
        <div class="group">
          <label for="method">METHOD</label>
          <select id="method" v-model="option" name="method" required>
            <option value="hamilton">HAMILTON</option>
            <option value="adam">ADAM</option>
            <option value="jefferson">JEFFERSON</option>
            <option value="webster">WEBSTER</option>
            <option value="huntington-hill">HUNTINGTON-HILL</option>
          </select>
        </div>
        <div class="group">
          <label for="seats">NUMBER OF SEATS</label>
          <input
            type="number"
            id="seats"
            name="seats"
            required
            v-model="nSeats"
            min="0"
          />
        </div>
        <div class="group">
          <label for="states">NUMBER OF STATES</label>
          <input
            type="number"
            id="states"
            name="states"
            required
            v-model="nStates"
            min="0"
            @input="cellMatrixModel.nRows = parseInt($event.target.value) + 1"
          />
        </div>
        <data-table @ready="$event.model = cellMatrixModel"></data-table>
      </fieldset>
    </form>
  </div>
</template>
<script lang="ts">
import {
  DataTable,
  createCellMatrixModel,
} from "@/components/partials/DataTable";
import { defineComponent, ref, reactive } from "vue";
import { headers } from "./apportionment-methods";
export default defineComponent({
  components: { DataTable },
  name: "ApportionmentSolver",
  setup() {
    const option = ref("hamilton");
    const nSeats = ref("0");
    const nStates = ref("5");
    const cellMatrixModel = reactive(
      createCellMatrixModel({
        rows: parseInt(nStates.value),
        cols: headers["hamilton"],
      }),
    );

    return {
      option,
      nSeats,
      nStates,
      cellMatrixModel,
    };
  },
});
</script>
<style lang="scss" scoped>
@use "solver-generic";
</style>
