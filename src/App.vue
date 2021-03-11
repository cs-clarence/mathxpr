<template>
  <div id="main-container">
    <main-header @menu-open="menuOpen = $event"></main-header>
    <main-content class="flex-grow"></main-content>
    <main-footer></main-footer>
    <slide-down>
      <main-menu v-if="menuOpen" id="menu"></main-menu>
    </slide-down>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MainHeader from "@/components/partials/Header.vue";
import MainFooter from "@/components/partials/Footer.vue";
import MainContent from "@/components/partials/Main.vue";
import MainMenu from "@/components/partials/Menu.vue";
import SlideDown from "@/components/transitions/SlideDown.vue";

export default defineComponent({
  name: "App",
  components: { SlideDown, MainMenu, MainHeader, MainFooter, MainContent },
  setup() {
    const menuOpen = ref(false);
    return {
      menuOpen,
    };
  },
});
</script>

<style lang="scss">
#main-container {
  @apply flex flex-col;
  min-height: 100vh;
}

html {
  position: relative;
  background-color: #e4e4e4;
}
</style>
