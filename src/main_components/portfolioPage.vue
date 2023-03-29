<template>
  <pageOnStart></pageOnStart>
  <div class="portfolio-page-wrapper" v-if="portfolioPageActive">
    <navMenu></navMenu>
    <portfolioHeader></portfolioHeader>
  </div>
</template>

<script setup>
import pageOnStart from "@/components/pageOnStart.vue";
import navMenu from "@/components/portfolioPageComponents/navMenu.vue";
import portfolioHeader from "@/components/portfolioPageComponents/portfolioHeader.vue";

import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const portfolioPageActive = computed(() => {
  return store.state.portfolioPageActive;
});
</script>

<style scoped></style>
