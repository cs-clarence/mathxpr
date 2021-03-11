<template>
  <div
    class="menu-icon flex flex-col pointer-events-auto"
    :class="{ open }"
    @click="$emit('open', (open = !open))"
  >
    <span class="menu-bar"></span>
    <span class="menu-bar"></span>
    <span class="menu-bar"></span>
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MenuButton",
  emit: {
    open: null,
  },
  setup() {
    const open = ref(false);
    return {
      open,
    };
  },
});
</script>

<style lang="scss" scoped>
.menu-icon {
  transition: bottom 0.5s ease-in-out, left 0.5s ease-in-out,
    background-color 0.25s ease-in-out;
}

.menu-bar {
  @apply h-full w-full relative bg-white;
  overflow: hidden;
  transition: transform 0.25s ease-in-out, opacity 0.125s ease-in-out,
    top 0.25s ease-in-out, background-color 0.25s ease-in-out;
  top: 0;
  margin-block: 4px;
}

.open .menu-bar:nth-child(1) {
  transform: rotate(45deg);
  top: 33%;
}
.open .menu-bar:nth-child(3) {
  transform: rotate(-45deg);
  top: -33%;
}

.open .menu-bar:nth-child(2) {
  transform: translateX(-100%);
  opacity: 0;
}
//.open .menu-bar {
//  @apply bg-red-600;
//}
</style>
