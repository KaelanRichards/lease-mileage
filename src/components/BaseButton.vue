<template>
  <button type="button" @click="$emit('on-click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
};
</script>

<style></style>
