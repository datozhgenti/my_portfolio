<template>
  <pageOnStart></pageOnStart>
  <div class="portfolio-page-wrapper" v-if="portfolioPageActive">
    <navMenu></navMenu>
    <portfolioHeader></portfolioHeader>
    <aboutSection></aboutSection>
    <skillsSection></skillsSection>
  </div>
</template>

<script setup>
import pageOnStart from "@/components/pageOnStart.vue";
import navMenu from "@/components/portfolioPageComponents/navMenu.vue";
import portfolioHeader from "@/components/portfolioPageComponents/portfolioHeader.vue";
import aboutSection from "@/components/portfolioPageComponents/aboutSection.vue";
import skillsSection from "@/components/portfolioPageComponents/skillsSection.vue";

import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const portfolioPageActive = computed(() => {
  return store.state.portfolioPageActive;
});
</script>

<style scoped></style>
