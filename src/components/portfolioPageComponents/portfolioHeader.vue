<template>
  <header class="flex space-between wrap">
    <div class="greeting-wrapper flex align-center">
      <div>
        <h1 class="font-48 line-height-62 inline-block" ref="header1">
          Hi<span class="capitalize">{{
            $store.state.visitorName
              ? " " + $store.state.visitorName
              : " Stranger,"
          }}</span>
        </h1>
        <h2 class="font-48 line-height-62" ref="header2">I am David Zhgenti</h2>
        <p class="weight-500 font-18" ref="header3">Frontend Developer</p>
        <div class="buttons-wrapper flex space-between">
          <buttonComp backroundProp="var(--green-color)" class="relative">
            <linkComp
              hrefProp="https://clinquant-platypus-d1adc8.netlify.app/david_zhgenti-cv.pdf"
              class="absolute anchorInBtn"
              target="_"
              download
            ></linkComp>
            Download CV
          </buttonComp>
          <a href="#about">
            <buttonComp borderProp="1px solid #F2F2F2" class="inline-block"
              >Learn More</buttonComp
            >
          </a>
        </div>
      </div>
    </div>
    <div
      class="image-wrapper opacity-0 border-radius-50 flex center-flex-element relative"
    >
      <img
        src="@/assets/me.png"
        alt="my photo"
        class="block border-radius-50"
      />
      <div class="black-overlay absolute border-radius-50"></div>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    this.addTypingAnim();
  },
  methods: {
    addTypingAnim() {
      const header1_length = this.$refs.header1.textContent.length;
      const header2_length = this.$refs.header2.textContent.length;
      const header3_length = this.$refs.header3.textContent.length;

      this.$refs.header1.style.animation = `typing 1s steps(${header1_length}) forwards`;
      this.$refs.header2.style.animation = `typing 1s 1s steps(${header2_length}) forwards`;
      this.$refs.header3.style.animation = `typing 1s 2s steps(${header3_length}) forwards`;
    },
  },
};
</script>

<script setup>
import buttonComp from "../buttonComponents/buttonComp.vue";
import linkComp from "../anchorTagComponents/linkComp.vue";
import observeAnimation from "@/composables/observe.js";

observeAnimation(".image-wrapper", "image-anim");
observeAnimation(".black-overlay", "black-overlay-anim");
</script>

<style scoped>
h1,
h2,
p {
  overflow: hidden;
  white-space: nowrap;
  width: 0;
}

header {
  margin-top: 187px;
  padding: 0 98px 47px 128px;
}

p {
  color: #828282;
  margin: 9px 0 35px;
}

.image-wrapper {
  width: 650px;
  height: 650px;
  border: 1px solid #202020;
  transform: translateX(60px);
}

.black-overlay {
  background-color: black;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.buttons-wrapper {
  width: 296px;
}

img {
  width: 596.89px;
  height: 596.89px;
  object-fit: cover;
}

.anchorInBtn {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.greeting-wrapper {
  width: 453px;
}

@media all and (max-width: 1328px) {
  header {
    justify-content: center;
    row-gap: 30px;
  }
}

@media all and (max-width: 900px) {
  .image-wrapper {
    border: none;
  }
}

@media all and (max-width: 821px) {
  .image-wrapper {
    width: 300px;
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
  }
}

@media all and (max-width: 500px) {
  h1,
  h2 {
    font-size: 10vw;
    line-height: normal;
  }
}

@media all and (max-width: 425px) {
  .image-wrapper {
    animation: none !important;
    opacity: 1;
    transform: translateX(0);
  }

  .black-overlay {
    animation-delay: 0ms !important;
  }
}
</style>

<style>
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes imageAnim {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes blackOverlayAnim {
  to {
    transform: scale(0);
  }
}

.image-anim {
  animation: imageAnim 0.5s ease-in forwards;
}

.black-overlay-anim {
  animation: blackOverlayAnim 1s 0.5s ease-in-out forwards;
}

.weight-500 {
  font-weight: 500;
}

.border-radius-50 {
  border-radius: 50%;
}

.flex-direction-column {
  flex-direction: column;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.capitalize {
  text-transform: capitalize;
}

.font-48 {
  font-size: 48px;
}

.font-18 {
  font-size: 18px;
}

.line-height-62 {
  line-height: 62.5px;
}

.opacity-0 {
  opacity: 0;
}

@media all and (max-width: 684px) {
  header,
  .about-bottom-wrapper,
  .projects-and-skills-wrapper,
  nav {
    padding: 20px !important;
  }
}
</style>
