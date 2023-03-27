<template>
  <main class="flex center-flex-element">
    <div class="flex">
      <inputComp
        inputType="text"
        placeholderText="Enter Name, Please"
        style="font-size: 4vw"
      ></inputComp>
      <img
        src="@/assets/arrowIcons/arrow-right.svg"
        alt="next button"
        class="border-bottom-gray"
      />
    </div>
  </main>
</template>

<script setup>
import inputComp from "./inputComponents/inputComp.vue";
</script>

<style scoped>
main {
  height: 100vh;
}

img {
  cursor: pointer;
  width: 7vw;
  padding-bottom: 10px;
}
</style>

<style></style>
