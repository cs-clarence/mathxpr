<template>
  <div>
    <form @submit.prevent="">
      <p id="title">GENERIC</p>
    </form>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Generic",
});
</script>
<style lang="scss" scoped>
@use "solver-generic";
</style>
