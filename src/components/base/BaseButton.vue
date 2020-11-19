// // https://stackoverflow.com/questions/43250649/vue-component-and-alert-on-click-button
// // been tryna get this working

<template>
  <div>
    <button v-on:click="submitBut" type="button">{{buttonText}}</button>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
          String,
          required: true,
          default: 'Submit' }
  },
  methods: {
    submitBut: function() {
      this.$emit('click');
    },
  } 
}
</script>

<style></style>
