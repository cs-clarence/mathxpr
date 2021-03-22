<template>
  <div id="main-container">
    <main-header
      id="header"
      @menu-open="menuOpenHandler"
      :menu-open="menuOpen"
      class="shadow-xl sticky top-0 z-10"
      :class="{ 'slide-up': menuOpen || hideHeader }"
    ></main-header>
    <!--
    WEIRD BUG WHEN USING H-FULL AND FLEX-GROW,
    CHILDREN DO NOT SIZE CORRECTLY WHEN USING PERCENT-BASED SIZING,
    -->
    <main-content></main-content>
    <main-footer>
      <div
        class="text-white text-xs flex flex-col justify-center items-center border-l px-2"
      >
        <span class="font-bold underline">DEVELOPER</span>
        <span>Clarence Manuel</span>
      </div>
      <div
        class="text-white text-xs flex flex-col justify-center items-center border-l px-2"
      >
        <span class="font-bold underline">UX/UI DESIGN</span>
        <span>Joshua Neo Lee</span>
        <span>Jay Deniel Rivera</span>
      </div>
      <div
        class="text-white text-xs flex flex-col justify-center border-l px-2"
      >
        <span class="font-bold">© {{ new Date().getFullYear() }} MathXpr</span>
      </div>
    </main-footer>
    <slide direction="down">
      <main-menu
        v-if="menuOpen"
        id="menu"
        @select="menuOpenHandler"
      ></main-menu>
    </slide>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import MainHeader from "@/components/partials/Header.vue";
import MainFooter from "@/components/partials/Footer.vue";
import MainContent from "@/components/partials/Main.vue";
import MainMenu from "@/components/partials/Menu.vue";
import Slide from "@/components/transitions/Slide.vue";
import { debounce } from "lodash";

export default defineComponent({
  name: "App",
  components: { Slide, MainMenu, MainHeader, MainFooter, MainContent },
  setup() {
    const menuOpen = ref(false);
    const hideHeader = ref(false);
    let lastScrollPosition = 0;

    function handleScroll(): void {
      hideHeader.value = lastScrollPosition < window.scrollY;
      lastScrollPosition = window.scrollY;
    }

    function menuOpenHandler(event: boolean) {
      (document.querySelector("body") as HTMLElement).style.overflow = event
        ? "hidden"
        : "auto";

      menuOpen.value = event;
    }

    onMounted(() => {
      document.addEventListener("scroll", debounce(handleScroll, 250));
    });
    return {
      menuOpen,
      hideHeader,
      menuOpenHandler,
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
  background-color: #e4e4e4;
}
#header {
  transition: all 0.125s ease-in-out;
  transform: translateY(0);
}
.slide-up {
  transform: translateY(-100%) !important;
}
</style>
