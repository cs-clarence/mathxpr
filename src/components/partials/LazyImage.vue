<template>
  <div class="relative img-container">
    <img
      v-if="showImage ? showImage : (showImage = load)"
      v-bind="$attrs"
      @load="imageLoaded = true"
    />
    <transition leave-to-class="loaded">
      <div
        v-if="!imageLoaded"
        id="loading-screen"
        class="flex flex-col justify-center items-center"
      >
        <img
          id="spinner"
          alt="spinner image"
          src="../../assets/images/svg-loaders/three-dots.svg"
        />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
export default defineComponent({
  name: "LazyImage",
  props: {
    load: {
      type: Boolean as PropType<boolean>,
      default: false,
      required: true,
    },
  },
  setup() {
    const showImage = ref(false);
    const imageLoaded = ref(false);

    return {
      showImage,
      imageLoaded,
    };
  },
});
</script>

<style lang="scss" scoped>
.loaded {
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
  transform: translateY(-100%);
  opacity: 0;
}
#spinner {
  width: 40px;
  height: 40px;
}

#loading-screen {
  background-color: #143042;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.img-container {
  writing-mode: horizontal-tb;
}
</style>
