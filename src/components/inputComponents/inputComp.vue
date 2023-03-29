<template>
  <input
    :type="inputType"
    :placeholder="placeholderText"
    id="border-bottom-gray"
    ref="input"
  />
</template>

<script setup>
/* eslint-disable */
import { ref } from "vue";
defineProps({
  inputType: { type: String, required: true },
  placeholderText: { type: String },
});

const input = ref(null);

defineExpose({
  input,
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
