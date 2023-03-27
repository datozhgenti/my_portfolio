<template>
  <input
    :type="inputType"
    :placeholder="placeholderText"
    id="border-bottom-gray"
  />
</template>

<script setup>
/* eslint-disable */
defineProps({
  inputType: { type: String, required: true },
  placeholderText: { type: String },
});
</script>

<style scoped>
input {
  border: none;
  background: none;
  padding-bottom: 10px;
}

input:focus {
  outline: none;
}
</style>
