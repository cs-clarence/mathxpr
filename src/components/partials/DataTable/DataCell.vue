<template>
  <div class="inline-block">
    <template v-if="cell.model">
      <template v-if="cell.model.input">
        <input
          class="w-full h-full"
          v-model="cell.model.data"
          :type="cell.model.inputAttrs?.type"
          :minlength="cell.model.inputAttrs?.minlength"
          :maxlength="cell.model.inputAttrs?.maxlength"
          :min="cell.model.inputAttrs?.min"
          :max="cell.model.inputAttrs?.max"
          :required="cell.model.inputAttrs?.required"
        />
      </template>
      <template v-else>{{ cell.model.data }}</template>
    </template>
    <slot></slot>
  </div>
</template>

<script lang="tsx">
import { defineComponent, reactive, onMounted, getCurrentInstance } from "vue";
import { DataCellModel, DataHeaderCellModel } from "./data-cell";

export default defineComponent({
  name: "DataCell",
  // props: {
  //   cellModel: {
  //     type: Object as PropType<CellModel>,
  //     required: true,
  //   },
  // },
  emits: {
    ready: null,
  },
  setup() {
    const instance = getCurrentInstance();
    const cell = reactive({
      _model: undefined,
      set model(model: DataCellModel | DataHeaderCellModel) {
        ((this._model as unknown) as
          | DataCellModel
          | DataHeaderCellModel) = model;
      },
      get model() {
        return (this._model as unknown) as DataCellModel | DataHeaderCellModel;
      },
    });

    onMounted(() => {
      instance?.emit("ready", cell);
    });

    return { cell };
  },
});
</script>

<style lang="scss" scoped>
div {
  @apply border-black;
  @apply border-2;
}
</style>
