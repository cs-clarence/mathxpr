<template>
  <transition name="slide-down" appear>
    <slot></slot>
  </transition>
</template>

<script lang="tsx">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SlideDown",
});
</script>

<style lang="css" scoped>
.slide-down-enter-active {
  transition: transform 0.25s ease-out;
}

.slide-down-enter-from {
  transform: translateY(-100%);
}

.slide-down-enter-to {
  transform: translateY(0%);
}

.slide-down-leave-active {
  transition: transform 0.25s ease-in;
}

.slide-down-leave-from {
  transform: translateY(0%);
}

.slide-down-leave-to {
  transform: translateY(-100%);
}
</style>
