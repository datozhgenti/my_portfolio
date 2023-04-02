<template>
  <nav class="flex space-between align-center fixed">
    <div class="my-name-wrapper">
      <linkComp hrefProp="#">
        <h2 class="nameHeader font-36">David</h2>
      </linkComp>
    </div>
    <div class="menu-wrapper flex align-center space-between">
      <div class="burger-icon-wrapper">
        <img
          src="@/assets/burger-icon/burger-icon.svg"
          alt="burger button"
          class="burger-icon pointer block"
        />
      </div>
      <div
        class="color-mode-btn pointer"
        v-for="(color, index) in colorModes"
        :class="[index === 0 ? 'mode-active' : '']"
        :key="color"
        @click="changeColor"
        ref="colorPaletts"
        :style="{ backgroundColor: color }"
      ></div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      colorModes: ["black", "#ffffff"],
    };
  },
  methods: {
    changeColor(e) {
      const colorPaletts = this.$refs.colorPaletts;
      for (let val of colorPaletts) {
        val.classList.remove("mode-active");
      }

      e.target.classList.add("mode-active");
    },
  },
};
</script>

<script setup>
import linkComp from "../anchorTagComponents/linkComp.vue";
</script>

<style scoped>
nav {
  padding: 28px 87px 28px 80px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: var(--page-background);
}
.color-mode-btn {
  border-radius: 10px;
  width: 36px;
  height: 36px;
}

.menu-wrapper {
  width: 190px;
}

.mode-active {
  box-shadow: 0px 0px 20px 3px var(--green-color);
}

@media all and (max-width: 375px) {
  .menu-wrapper {
    width: 130px;
  }
}
</style>

<style>
.space-between {
  justify-content: space-between;
}

.align-center {
  align-items: center;
}

.font-36 {
  font-size: 2.25em;
}

.pointer {
  cursor: pointer;
}

.block {
  display: block;
}

.fixed {
  position: fixed;
}
</style>
