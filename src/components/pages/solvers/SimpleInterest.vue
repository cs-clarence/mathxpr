<template>
  <div>
    <form @submit.prevent="methods[get]()">
      <p id="title">SIMPLE INTEREST</p>
      <fieldset>
        <div class="group">
          <label for="get">GET</label>
          <select id="get" v-model="get" name="get" required>
            <option value="P">P (Principal Amount)</option>
            <option value="r">r (Rate of Interest in %)</option>
            <option value="t">t (Time in Years)</option>
            <option value="I">I (Interest)</option>
            <option value="F">F (Future Value)</option>
          </select>
        </div>
        <div class="group">
          <label for="principal-amount">P (Principal Amount)</label>
          <input
            id="principal-amount"
            name="principal-amount"
            type="number"
            :disabled="get === 'P'"
            v-model="principalAmount"
            step="any"
          />
        </div>
        <div class="group">
          <label for="rate-of-interest">r (Rate of Interest in %)</label>
          <input
            id="rate-of-interest"
            name="rate-of-interest"
            type="number"
            :disabled="get === 'r'"
            v-model="rateOfInterest"
            step="any"
          />
        </div>
        <div class="group">
          <label for="time">t (Time in Years)</label>
          <input
            id="time"
            name="time"
            type="number"
            :disabled="get === 't'"
            v-model="time"
            step="any"
          />
        </div>
        <div class="group" v-if="get !== 'F'">
          <label for="interest">I (Interest)</label>
          <input
            id="interest"
            name="interest"
            type="number"
            :disabled="get === 'I'"
            v-model="interest"
            step="any"
          />
        </div>
        <div class="group" v-if="get === 'F'">
          <label for="future-value">F (Future Value)</label>
          <input
            id="future-value"
            name="future-value"
            type="number"
            v-model="futureValue"
            step="any"
            disabled
          />
        </div>
        <button>CALCULATE</button>
      </fieldset>
    </form>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "SimpleInterest",
  setup() {
    const get = ref("F");
    const futureValue = ref("0");
    const interest = ref("0");
    const rateOfInterest = ref("0");
    const principalAmount = ref("0");
    const time = ref("0");
    const methods = {
      // P() {

      // },
      I() {
        interest.value = (
          parseFloat(principalAmount.value) *
          (parseFloat(rateOfInterest.value) / 100) *
          parseFloat(time.value)
        ).toFixed(2);
      },
      t() {
        time.value = (
          parseFloat(interest.value) /
          (parseFloat(principalAmount.value) *
            (parseFloat(rateOfInterest.value) / 100))
        ).toFixed(2);
      },
      r() {
        rateOfInterest.value = (
          (parseFloat(interest.value) /
            (parseFloat(principalAmount.value) * parseFloat(time.value))) *
          100
        ).toFixed(2);
      },
      F() {
        futureValue.value = (
          parseFloat(principalAmount.value) *
          (1 +
            (parseFloat(rateOfInterest.value) / 100) * parseFloat(time.value))
        ).toFixed(2);
      },
      P() {
        principalAmount.value = (
          parseFloat(interest.value) /
          ((parseFloat(rateOfInterest.value) / 100) * parseFloat(time.value))
        ).toFixed(2);
      },
    };
    return {
      get,
      time,
      interest,
      rateOfInterest,
      futureValue,
      principalAmount,
      methods,
    };
  },
});
</script>
<style lang="scss" scoped>
@use "solver-generic";
</style>
