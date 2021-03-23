<template>
  <div>
    <form @submit.prevent="">
      <p id="title">CORRELATION</p>
    </form>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Correlation",
});
</script>
<style lang="scss" scoped>
@use "solver-generic";
</style>
