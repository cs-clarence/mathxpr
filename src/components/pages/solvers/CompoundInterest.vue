<template>
  <div>
    <form @submit.prevent="methods[get]()">
      <p id="title">COMPOUND INTEREST</p>
      <fieldset>
        <div class="group">
          <label for="get">GET</label>
          <select id="get" v-model="get" name="get" required>
            <option value="P">P (Principal Amount)</option>
            <option value="r">r (Rate of Interest in %)</option>
            <option value="t">t (Time in Years)</option>
            <!-- <option value="n">n (Compounding Period)</option> -->
            <option value="A">A (Future Value)</option>
          </select>
        </div>
        <div class="group">
          <label for="principal-amount">P (Principal Amount)</label>
          <input
            id="principal-amount"
            name="principal-amount"
            type="number"
            :disabled="get === 'P'"
            v-model.number="principalAmount"
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
            v-model.number="rateOfInterest"
            step="any"
          />
        </div>
        <div class="group">
          <label for="compounding-period">n (Compounding Period)</label>
          <input
            type="number"
            step="any"
            min="0"
            name="compounding-period-other"
            id="compounding-period-other"
            v-model.number="compoundingPeriod"
          />
        </div>
        <div class="group">
          <label for="time">t (Time in Years)</label>
          <input
            id="time"
            name="time"
            type="number"
            :disabled="get === 't'"
            v-model.number="time"
            step="any"
          />
        </div>

        <div class="group">
          <label for="future-value">A (Future Value)</label>
          <input
            id="future-value"
            name="future-value"
            type="number"
            v-model.number="futureValue"
            step="any"
            :disabled="get === 'A'"
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
  name: "CompoundInterest",
  setup() {
    const get = ref("A");
    const futureValue = ref(0);
    const interest = ref(0);
    const rateOfInterest = ref(0);
    const principalAmount = ref(0);
    const time = ref(0);
    const compoundingPeriod = ref(0);
    const methods = {
      t() {
        time.value = (
          Math.log(futureValue.value / principalAmount.value) /
          Math.log(1 + rateOfInterest.value / 100 / compoundingPeriod.value) /
          compoundingPeriod.value
        ).toFixed(2);
      },
      r() {
        rateOfInterest.value =
          (
            compoundingPeriod.value *
            ((futureValue.value / principalAmount.value) **
              (1 / (compoundingPeriod.value * time.value)) -
              1)
          ).toFixed(2) * 100;
      },
      A() {
        futureValue.value = (
          principalAmount.value *
          (1 + rateOfInterest.value / 100 / compoundingPeriod.value) **
            (compoundingPeriod.value * time.value)
        ).toFixed(2);
      },
      P() {
        principalAmount.value = (
          futureValue.value /
          (1 + rateOfInterest.value / 100 / compoundingPeriod.value) **
            (compoundingPeriod.value * time.value)
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
      compoundingPeriod,
    };
  },
});
</script>
<style lang="scss" scoped>
@use "solver-generic";
</style>
