<template>
  <div
    class="
    rounded-md bg-purple-300 preview relative shadow-xl overflow-hidden
    cursor-pointer effect
    "
  >
    <router-link :to="to">
      <div class="w-full h-full invisible sm:visible">
        <lazy-image :src="prevImg" v-if="prevImg" load />
      </div>

      <div
        v-if="icon"
        class="
        absolute flex flex-col justify-start items-center top-0
        sm:items-end
        w-full h-full pointer-events-none
        "
      >
        <img id="icon" class="w-full h-full sm:w-20 sm:h-20 px-4" :src="icon" />
      </div>

      <div
        class="
      bg-white flex flex-col justify-center text-xs 
      sm:text-sm md:text-base
      text-center absolute bottom-0 w-full sm:w-max p-3 sm:rounded-tr-md shadow-xl
      opacity-50 sm:opacity-100
      overflow-hidden overflow-ellipsis uppercase
      "
        v-if="$slots.default"
      >
        <!-- <span class="uppercase"> -->
        <slot></slot>
        <!-- </span> -->
      </div>
    </router-link>
  </div>
</template>

<script lang="tsx">
import { defineComponent, PropType } from "vue";
import LazyImage from "./LazyImage.vue";

export default defineComponent({
  name: "SolverPreview",
  components: {
    LazyImage,
  },
  props: {
    prevImg: {
      type: String as PropType<string>,
      required: true,
    },
    icon: {
      type: String as PropType<string>,
      required: true,
    },
    to: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.preview {
  width: 100%;
  height: 128px;
  @screen sm {
    width: 100%;
    height: 256px;
  }
}

@screen sm {
  .effect {
    border-color: transparent;
    border-width: 8px;
    transition: border-color 0.25s ease-in-out, transform 0.25s ease-in-out;
  }

  .effect:hover {
    @apply border-purple-400;
    border-style: solid;
    transform: scale(1.025);
  }
}
</style>
