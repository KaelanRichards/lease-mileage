<template>
  <h3>LEASE CALCS</h3>

  <div>
    <form>
      <label for="text-input__miles">How many miles on your vehicle?</label>
      <input
        v-model="message"
        type="text"
        id="text-input__miles"
        placeholder="mileage"
      />

      <label for="text-input__yearly-limit">How many miles per year?</label>
      <input
        v-model="message"
        type="text"
        id="text-input__yearly-limit"
        placeholder="yearly limit"
      />

      <label for="text-input__lease-years"></label>
      <input v-model="message" type="text" id="text-input__lease-years" />
    </form>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    msg: String,
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
