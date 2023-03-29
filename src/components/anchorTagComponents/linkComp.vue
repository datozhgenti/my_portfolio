<template>
  <a :href="hrefProp" class="block"><slot></slot></a>
</template>

<script>
export default {
  props: ["hrefProp"],
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: var(--text-starter-color);
}
</style>
