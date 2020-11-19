<template>
  <div>
    <form>
      <label>{{ labelName }}</label>
      <input
        :type="inputType"
        :value="value" 
        @input="$emit('input', $event.target.value)" />
    </form>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    inputType: String,
    labelName: String,
    value: String,
  },
};
</script>
