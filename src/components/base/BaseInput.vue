<template>
  <div>
    <form>
      <label>{{ labelName }}</label>
      <input
        :type="inputType"
        :placeholder="inputPlaceholder"
        :value="inputValue"
        v-model="value"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    inputType: String,
    labelName: String,
    inputPlaceholder: String,
    inputValue: String,
  },
  data() {
    return {
      value: this.inputValue,
    };
  },
};
</script>
