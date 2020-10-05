<template>
  <main>
    <BaseInput
      inputType="text"
      labelName="Enter your current mileage"
      inputPlaceholder="current mileage..."
      v-model="currentMileage"
    />
    <BaseButton>{{ buttonText }}</BaseButton>
  </main>
</template>

<script>
import BaseInput from "./components/BaseInput.vue";
import BaseButton from "./components/BaseButton.vue";

export default {
  name: "LeaseForm",
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

<style></style>
