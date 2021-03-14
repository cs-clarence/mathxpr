<template>
  <div class="main container mx-auto p-10 flex-grow min-h-5">
    <router-view></router-view>
  </div>
</template>

<script lang="tsx">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Main",
  // setup() {},
});
</script>

<style lang="scss" scoped>
.main {
  background-color: rgba(white, 0.5);
}
</style>
