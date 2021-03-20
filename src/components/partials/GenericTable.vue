<template>
  <table>
    <thead v-if="head">
      <template v-if="typeof head[0] === 'object' && head[0].length">
        <tr v-for="(i, iIndex) of head" :key="iIndex">
          <!-- * MULTI DIMENSION ARRAY * -->
          <component
            v-for="(j, jIndex) of i"
            :key="jIndex"
            :is="j.cellType ?? 'th'"
            :colspan="j.colspan ?? '1'"
            :ref="(el) => appendToMatrix(tableHeadModel, iIndex, jIndex, el)"
          >
            <template v-if="j.input">
              <input :type="j.inputAttrs.type ?? 'text'" />
            </template>
            <template v-else>
              {{ j.data ?? j }}
            </template>
          </component>
        </tr>
      </template>
    </thead>
    <tbody v-if="deriveBodyFromHead">
      <!-- * DERIVED FROM HEAD * -->
      <tr v-for="(i, iIndex) of Number(bodyRows)" :key="iIndex">
        <template v-for="(j, jIndex) of head.flat(1)" :key="jIndex">
          <td
            v-if="j.headMeta.derive"
            :ref="(el) => appendToMatrix(tableBodyModel, iIndex, jIndex, el)"
          >
            <template v-if="j.headMeta.input">
              <input
                @change="$emit('tableUpdated')"
                :type="j.headMeta.inputAttrs.type ?? 'text'"
                :value="
                  j.headMeta.data
                    ?.replace('$header', j.data)
                    .replace('$index', String(iIndex + 1)) ?? ''
                "
              />
            </template>
            <template v-else>
              {{ j.headMeta.data ?? "" }}
            </template>
          </td>
        </template>
      </tr>
    </tbody>
    <tbody v-else-if="body"></tbody>
    <tfoot v-if="foot"></tfoot>
    <caption v-if="caption"></caption>
  </table>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";

export type TableCell = {
  data?: string;
  input?: boolean;
  inputAttrs?: {
    type?: string;
    min?: number;
    max?: number;
    minlength?: number;
    maxlength?: number;
    required?: boolean;
  };
  textAlign?: "left" | "center" | "right";
  cellType?: "th" | "td";
  colspan?: number;
  rowspan?: number;
  scope?: string;
};

export type TableHeadCell = TableCell & {
  headMeta?: TableCell & {
    derive?: boolean;
  };
};

export default defineComponent({
  name: "GenericTable",
  props: {
    head: {
      type: Array as PropType<(string | TableHeadCell)[][]>,
      required: false,
    },
    body: {
      type: Array as PropType<(string | TableCell)[][]>,
      required: false,
    },
    foot: {
      type: Array as PropType<(string | TableCell)[][]>,
      required: false,
    },
    caption: {
      type: String as PropType<string>,
      required: false,
    },
    headRows: {
      type: Number as PropType<number>,
      required: false,
      default: 0,
    },
    headColumns: {
      type: Number as PropType<number>,
      required: false,
      default: 0,
    },
    bodyRows: {
      type: Number as PropType<number>,
      required: false,
      default: 0,
    },
    bodyColumns: {
      type: Number as PropType<number>,
      required: false,
      default: 0,
    },
    footRows: {
      type: Number as PropType<number>,
      required: false,
      default: 0,
    },
    footColumns: {
      type: Number as PropType<number>,
      required: false,
      default: 0,
    },
    deriveBodyFromHead: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: true,
    },
  },
  emits: {
    tableUpdated: null,
  },
  setup() {
    const tableBodyModel = reactive([]);
    const tableHeadModel = reactive([]);
    const tableFooterModel = reactive([]);

    function appendToMatrix(
      matrix: HTMLElement[][],
      i: number,
      j: number,
      el: HTMLElement,
    ) {
      return ((matrix[i] ?? (matrix[i] = []))[j] = el);
    }
    return {
      tableBodyModel,
      tableFooterModel,
      tableHeadModel,
      appendToMatrix,
    };
  },
});

export type Setup = {
  tableHeadModel: HTMLElement[][];
  tableBodyModel: HTMLElement[][];
  tableFooterModel: HTMLElement[][];
};
</script>
<style lang="scss" scoped>
th,
td {
  @apply border-2;
  @apply border-black;
}
</style>
