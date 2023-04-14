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
          @click="openNav"
        />
      </div>
      <div
        class="color-mode-btn pointer"
        v-for="(color, index) in colorModes"
        :class="[index === 0 ? 'mode-active' : '']"
        :key="color"
        @click="changeColorMode"
        ref="colorPaletts"
        :style="{ backgroundColor: color }"
      ></div>
    </div>
    <teleport to="body">
      <transition name="move-right">
        <div
          class="responsive-nav fixed"
          @click.self="closeNav"
          v-if="navActive"
        >
          <div class="close-img-wrapper flex justify-end">
            <img
              src="@/assets/close-icons/close.svg"
              alt="close button"
              class="close-btn pointer"
              @click="closeNav"
            />
          </div>
          <div class="responsive-nav-items-wrapper absolute text-align-center">
            <linkComp
              @click="closeNav"
              v-for="item in navItems"
              :key="item"
              :href="item.href"
              class="weight-700"
              id="nav-item"
              >{{ item.name }}</linkComp
            >
          </div>
        </div>
      </transition>
    </teleport>
    <transition name="fade-top">
      <div class="sent-message absolute" v-if="$store.state.messageSent">
        <p>Message Sent Successfully!</p>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      colorModes: ["black", "white"],
      navItems: [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "What i do", href: "#skills" },
        { name: "My Projects", href: "#projects" },
        { name: "Get in touch", href: "#contact" },
      ],
      navActive: false,
    };
  },
  methods: {
    changeColorMode(e) {
      const colorPaletts = this.$refs.colorPaletts;
      for (let val of colorPaletts) {
        val.classList.remove("mode-active");
      }

      e.target.classList.add("mode-active");

      const activeColor = e.target.style.backgroundColor;

      document.querySelector("body").style.transition = "1s ease-in-out";

      this.colorDetect(activeColor);
    },
    colorDetect(activeColor) {
      activeColor === "white"
        ? this.defaultColorsChange("#ffffff", "#171717")
        : this.defaultColorsChange("#171717", "#ffffff");
    },
    defaultColorsChange(pageBackground, textColor) {
      const root = document.querySelector(":root");
      root.style.setProperty("--page-background", pageBackground);
      root.style.setProperty("--text-starter-color", textColor);
    },
    openNav() {
      this.navActive = true;
    },
    closeNav() {
      this.navActive = false;
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
  background-color: #171717;
}

.sent-message {
  background-color: var(--green-color);
  left: 50%;
  top: 105px;
  transform: translate(-50%);
  padding: 20px;
}

.nameHeader {
  color: #ffffff;
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

.responsive-nav {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 2;
  padding: 15px;
}

.responsive-nav-items-wrapper {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
}

.responsive-nav-items-wrapper a {
  font-size: 2.25em;
}

.responsive-nav-items-wrapper a:not(:last-child) {
  margin-bottom: 20px;
}

@media all and (max-width: 375px) {
  .menu-wrapper {
    width: 130px;
  }
}

@media all and (max-width: 430px) {
  .responsive-nav-items-wrapper a {
    font-size: 6vw;
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

.justify-end {
  justify-content: flex-end;
}

body,
html {
  scroll-behavior: smooth;
}

#about,
#skills,
#projects,
#contact {
  scroll-margin-top: 100px;
}

#nav-item {
  color: #ffffff;
}

.weight-700 {
  font-weight: 700;
}

.move-right-enter-from,
.move-right-leave-to {
  transform: translateX(-100%);
}

.move-right-enter-active,
.move-right-leave-active {
  transition: transform 0.5s ease;
}

.fade-top-enter-from,
.fade-top-leave-to {
  opacity: 0;
}

.fade-top-enter-active,
.fade-top-leave-active {
  transition: 1s linear;
}
</style>
