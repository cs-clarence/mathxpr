<template>
  <div class="bg-purple-400 h-16">
    <div class="container mx-auto flex flex-row justify-between">
      <logo></logo>
      <div class="container fixed h-screen mx-auto z-10 pointer-events-none">
        <div
          id="menu-button-container"
          class="rounded-full absolute"
          :class="{ menuOpen }"
        >
          <menu-button
            class="p-3 w-16 h-16"
            @open="$emit('menuOpen', (menuOpen = !menuOpen))"
          ></menu-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref } from "vue";
import MenuButton from "@/components/partials/MenuButton.vue";
import Logo from "@/components/partials/Logo.vue";

export default defineComponent({
  name: "Header",
  components: { Logo, MenuButton },
  emit: {
    menuOpen: null,
  },
  setup() {
    const menuOpen = ref(false);
    return {
      menuOpen,
    };
  },
});
</script>

<style lang="scss" scoped>
#menu-button-container {
  transition: all 0.5s cubic-bezier(0.25, -0.25, 0.25, 1.25),
    background-color 0.25s;
  top: 0;
  right: 0;
}
.menuOpen {
  background-color: rgba(black, 0.25);
  top: 67% !important;
  right: 50% !important;
  margin-right: -32px;
}
</style>
