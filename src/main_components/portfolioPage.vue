<template>
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
</template>

<script setup>
import pageOnStart from "@/components/pageOnStart.vue";
import navMenu from "@/components/portfolioPageComponents/navMenu.vue";
import portfolioHeader from "@/components/portfolioPageComponents/portfolioHeader.vue";
import aboutSection from "@/components/portfolioPageComponents/aboutSection.vue";
import skillsSection from "@/components/portfolioPageComponents/skillsSection.vue";
import projectsSection from "@/components/portfolioPageComponents/projectsSection.vue";
import contactSection from "@/components/portfolioPageComponents/contactSection.vue";

import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const portfolioPageActive = computed(() => {
  return store.state.portfolioPageActive;
});
</script>

<style scoped>
p {
  color: var(--footer-text-color);
  margin-bottom: 15px;
}

.font-14 {
  font-size: 0.875em;
}
</style>
