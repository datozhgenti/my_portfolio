<template>
  <header class="flex space-between wrap">
    <div class="greeting-wrapper flex align-center">
      <div>
        <h1 class="font-48 line-height-62">
          Hi<span class="capitalize">{{
            $store.state.visitorName
              ? " " + $store.state.visitorName
              : " Stranger"
          }}</span
          >, I am David Zhgenti
        </h1>
        <p class="weight-500 font-18">Frontend Developer</p>
        <div class="buttons-wrapper flex space-between">
          <buttonComp backroundProp="var(--green-color)" class="relative">
            <linkComp
              hrefProp="@/assets/docs/david_zhgenti-cv.pdf"
              class="absolute anchorInBtn"
              download
            ></linkComp>
            Download CV
          </buttonComp>
          <buttonComp borderProp="1px solid #F2F2F2">Learn More</buttonComp>
        </div>
      </div>
    </div>
    <div class="image-wrapper border-radius-50 flex center-flex-element">
      <img
        src="@/assets/me.png"
        alt="my photo"
        class="block border-radius-50"
      />
    </div>
  </header>
</template>

<script></script>

<script setup>
import buttonComp from "../buttonComponents/buttonComp.vue";
import linkComp from "../anchorTagComponents/linkComp.vue";
</script>

<style scoped>
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
</style>

<style>
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
  font-size: 3em;
}

.font-18 {
  font-size: 1.125em;
}

.line-height-62 {
  line-height: 62.5px;
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
