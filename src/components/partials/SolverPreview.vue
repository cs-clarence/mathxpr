<template>
  <div
    class="
    rounded-md bg-purple-300 preview relative shadow-xl overflow-hidden
    cursor-pointer effect
    "
  >
    <router-link :to="to">
      <lazy-image :src="imgSrc" load />
    </router-link>

    <div
      class="
      bg-white h-6 md:h-10 flex flex-col justify-center md:text-lg text-center
      absolute bottom-0 w-full md:w-max p-3 md:rounded-tr-md shadow-xl
      "
      v-if="$slots.default"
    >
      <span class="uppercase">
        <slot></slot>
      </span>
    </div>
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
    imgSrc: {
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
  @screen md {
    width: 100%;
    height: 256px;
  }
}

@screen sm {
  .effect {
    border-color: transparent;

    transition: border-color 0.25s ease-in-out, transform 0.25s ease-in-out;
  }

  .effect:hover {
    @apply border-purple-400;
    border-width: 8px;
    border-style: solid;
    transform: scale(1.025);
  }
}
</style>
