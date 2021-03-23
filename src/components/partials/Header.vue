<template>
  <div class="bg-purple-400 h-16">
    <div class="container mx-auto flex flex-row justify-between">
      <logo></logo>
      <search-bar class="hidden sm:inline-block h-12 w-96"></search-bar>

      <div class="container fixed h-screen mx-auto z-10 pointer-events-none">
        <div
          id="menu-button-container"
          class="rounded-full absolute"
          :class="{ menuOpen }"
        >
          <menu-button
            class="p-3 w-16 h-16 sm:hidden"
            :open="menuOpen"
            @open="$emit('menuOpen', !menuOpen)"
          ></menu-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="tsx">
import { defineComponent, PropType } from "vue";
import MenuButton from "@/components/partials/MenuButton.vue";
import Logo from "@/components/partials/Logo.vue";
import SearchBar from "@/components/partials/SearchBar.vue";

export default defineComponent({
  name: "Header",
  components: { Logo, MenuButton, SearchBar },
  emit: {
    menuOpen: null,
  },
  props: {
    menuOpen: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
  },
  // setup() {
  // },
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
