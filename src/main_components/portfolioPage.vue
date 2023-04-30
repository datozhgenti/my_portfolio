<template>
  <div v-if="pageLoaded">
    <pageOnStart></pageOnStart>
    <div class="portfolio-page-wrapper" v-if="portfolioPageActive">
      <navMenu></navMenu>
      <portfolioHeader></portfolioHeader>
      <aboutSection></aboutSection>
      <skillsSection></skillsSection>
      <projectsSection></projectsSection>
      <contactSection></contactSection>
      <footer class="text-align-center">
        <p class="font-14 weight-500">© David 2023</p>
      </footer>
    </div>
  </div>
  <preloaderComp v-else></preloaderComp>
</template>

<script setup>
import pageOnStart from "@/components/pageOnStart.vue";
import navMenu from "@/components/portfolioPageComponents/navMenu.vue";
import portfolioHeader from "@/components/portfolioPageComponents/portfolioHeader.vue";
import aboutSection from "@/components/portfolioPageComponents/aboutSection.vue";
import skillsSection from "@/components/portfolioPageComponents/skillsSection.vue";
import projectsSection from "@/components/portfolioPageComponents/projectsSection.vue";
import contactSection from "@/components/portfolioPageComponents/contactSection.vue";
import preloaderComp from "@/components/preloaderComponents/preloaderComp.vue";

import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const portfolioPageActive = computed(() => {
  return store.state.portfolioPageActive;
});

const pageLoaded = computed(() => {
  return store.state.pageLoaded;
});

onMounted(() => {
  window.addEventListener("load", () => {
    setTimeout(() => {
      store.commit("whenPageLoaded");
    }, 2000);
  });
});
</script>

<style scoped>
p {
  color: var(--footer-text-color);
  margin-bottom: 15px;
}

.font-14 {
  font-size: 14px;
}
</style>
