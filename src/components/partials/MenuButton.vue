<template>
  <div
    class="menu-icon flex flex-col z-10 rounded-full"
    :class="{ open, 'bg-black-semi-trans': open }"
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

.bg-black-semi-trans {
  background-color: rgba(black, 0.25);
}

.open {
  position: fixed;
  margin-left: -32px;
  top: 67%;
  left: 50%;
}

//.open .menu-bar {
//  @apply bg-red-600;
//}
</style>
