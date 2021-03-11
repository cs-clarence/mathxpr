<template>
  <div class="bg-purple-400 h-16">
    <div class="container mx-auto flex flex-row justify-between">
      <img
        src="../../assets/images/logo.svg"
        alt="site logo"
        class="p-3 h-16"
      />
      <menu-button
        class="p-3 w-16 h-16"
        @open="$emit('menuOpen', (menuOpen = !menuOpen))"
      ></menu-button>
    </div>
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref } from "vue";
import MenuButton from "@/components/partials/MenuButton.vue";

export default defineComponent({
  name: "Header",
  components: { MenuButton },
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

<style lang="css"></style>
