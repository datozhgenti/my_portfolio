<template>
  <div class="project-card skill-and-project-card-sizes relative opacity-0">
    <img
      :src="projectImg"
      alt="restaraunt project"
      class="w100 h100 object-fit-cover block"
    />
    <div class="overlay flex align-center justify-center absolute">
      <div class="overlay-content text-align-center">
        <h2 class="font-24">{{ projectName }}</h2>
        <linkComp :href="projectUrl" target="_" class="inline-block">
          <buttonComp
            class="block weight-500"
            backroundProp="var(--green-color)"
            >View</buttonComp
          >
        </linkComp>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projectImg", "projectUrl", "projectName"],
};
</script>

<script setup>
import buttonComp from "../buttonComponents/buttonComp.vue";
import linkComp from "../anchorTagComponents/linkComp.vue";
import observeAnimation from "@/composables/observe";

observeAnimation(".project-card", "fade-right", 1);
</script>

<style scoped>
.overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
}

.project-card {
  overflow: hidden;
}

img {
  transition: 1s transform ease-in;
}

.project-card:hover img {
  transform: scale(1.5);
}

h2 {
  margin-bottom: 20px;
  color: #ffffff;
}
</style>

<style>
.w100 {
  width: 100%;
}

.h100 {
  height: 100%;
}

.object-fit-cover {
  object-fit: cover;
}

.justify-center {
  justify-content: center;
}

.center-with-margin {
  margin: 0 auto;
}

.inline-block {
  display: inline-block;
}

.font-24 {
  font-size: 24px;
}
</style>
