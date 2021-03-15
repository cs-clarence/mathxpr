<template>
  <transition
    :name="`slide-${direction}`"
    enter-active-class="slide-enter-active"
    leave-active-class="slide-leave-active"
    appear
  >
    <slot></slot>
  </transition>
</template>

<script lang="tsx">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "SlideDown",
  props: {
    direction: {
      type: String as PropType<"down" | "up" | "left" | "right">,
      default: "down",
    },
  },
});
</script>

<style lang="scss" scoped>
.slide-enter-active {
  transition: transform 0.25s ease-out;
}

.slide-leave-active {
  transition: transform 0.25s ease-in;
}

// slide down
.slide-down-enter-from {
  transform: translateY(-100%);
}

.slide-down-enter-to {
  transform: translateY(0%);
}

.slide-down-leave-from {
  transform: translateY(0%);
}

.slide-down-leave-to {
  transform: translateY(-100%);
}

// slide up
.slide-up-enter-from {
  transform: translateY(100%);
}

.slide-up-enter-to {
  transform: translateY(0%);
}

.slide-up-leave-from {
  transform: translateY(0%);
}

.slide-up-leave-to {
  transform: translateY(100%);
}

// slide left
.slide-left-enter-from {
  transform: translateX(100%);
}

.slide-left-enter-to {
  transform: translateX(0%);
}

.slide-left-leave-from {
  transform: translateX(0%);
}

.slide-left-leave-to {
  transform: translateX(100%);
}

// slide right
.slide-right-enter-from {
  transform: translateX(-100%);
}

.slide-right-enter-to {
  transform: translateX(0%);
}

.slide-right-leave-from {
  transform: translateX(0%);
}

.slide-right-leave-to {
  transform: translateX(-100%);
}
</style>
