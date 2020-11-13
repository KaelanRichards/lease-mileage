<template>
  <main>
    <h4>Lease calcs</h4>
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
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
export default {
  name: "LeaseForm",
  components: {
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      buttonText: "Next",
      //TODO working on containing data into object for template
      formData: [
        {
          inputType: "text",
          labelName: "",
        },
      ],
    };
  },
};
</script>

<style></style>
