<template>
  <BaseInput
    inputType="text"
    labelName="Enter your current mileage"
    inputPlaceholder="current mileage..."
    v-model="currentMileage"
  />
  <BaseButton>{{ buttonText }}</BaseButton>
</template>

<script>
import BaseInput from "./components/BaseInput.vue";
import BaseButton from "./components/BaseButton.vue";

export default {
  name: "App",
  components: {
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      buttonText: "Next",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
