<template>
  <button
    class="pointer weight-500"
    :style="{
      backgroundColor: backroundProp,
      border: borderProp,
      width: widthProp,
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["backroundProp", "borderProp", "widthProp"],
};
</script>

<style scoped>
button {
  background-color: transparent;
  border: none;
  font-size: 14px;
  padding: 12px 27px;
  width: 143px;
}
</style>

<style>
.weight-500 {
  font-weight: 500;
}
</style>
