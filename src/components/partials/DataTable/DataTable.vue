<template>
  <div
    class="grid"
    :style="{
      gridTemplateColumns: `repeat(${table.model?.nCols}, minmax(auto, 1fr))`,
      gridTemplateRows: `repeat(${table.model?.nRows}, minmax(auto, 1fr))`,
    }"
  >
    <template v-if="table.model">
      <template v-if="table.model.colHeaderCells">
        <data-cell v-if="table.model?.rowHeaderCells"></data-cell>
        <data-cell
          v-for="(cellModel, cIndex) of table.model.colHeaderCells"
          :key="cIndex"
          @ready="$event.model = cellModel"
        >
        </data-cell>
      </template>

      <template v-if="table.model.bodyCells">
        <template v-for="(row, rIndex) of table.model.bodyCells" :key="rIndex">
          <data-cell
            v-if="table.model?.rowHeaderCells"
            @ready="$event.model = table.model.rowHeaderCells[rIndex]"
          ></data-cell>
          <data-cell
            v-for="(cellModel, cIndex) of row"
            :key="cIndex"
            @ready="$event.model = cellModel"
          >
          </data-cell>
        </template>
      </template>
    </template>
  </div>
</template>

<script lang="tsx">
import { defineComponent, getCurrentInstance, onMounted, reactive } from "vue";
import DataCell from "./DataCell.vue";
import { DataTableModel } from "./data-table";

export default defineComponent({
  components: { DataCell },
  name: "DataTable",
  emit: {
    ready: null,
  },
  setup() {
    const instance = getCurrentInstance();
    const table = reactive(new DataTableModel());

    // setInterval(() => {
    //   console.log("fired");
    // }, 15000);

    onMounted(() => {
      instance?.emit("ready", table);
    });

    return { table };
  },
});
</script>

<style lang="scss" scoped></style>
