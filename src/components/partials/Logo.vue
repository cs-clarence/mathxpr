<template>
  <div>
    <router-link to="/">
      <img
        src="../../assets/images/logo.svg"
        alt="site logo"
        class="p-3 h-16 w-16"
      />
    </router-link>
  </div>
</template>

<script lang="tsx">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Logo",
});
</script>

<style lang="css" scoped></style>
