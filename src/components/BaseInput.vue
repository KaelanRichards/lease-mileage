<template>
  <h3>LEASE CALCS</h3>

  <div>
    <form>
      <label>How many miles on your vehicle?</label>
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

<style scoped>
div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
