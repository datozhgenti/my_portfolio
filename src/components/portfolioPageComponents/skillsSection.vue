<template>
  <section class="skills-section">
    <h2 class="font-48 line-height-62 text-align-center">What i do</h2>
    <div class="skills-wrapper flex space-between wrap">
      <skillCard
        v-for="skill in skills"
        :key="skill"
        :iconUrl="skill.icon"
        :skillName="skill.name"
      ></skillCard>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { icon: require("@/assets/dev_icons/html5.svg"), name: "HTML 5" },
        { icon: require("@/assets/dev_icons/css3.svg"), name: "CSS 3" },
        {
          icon: require("@/assets/dev_icons/javascript.svg"),
          name: "JAVASCRIPT ES6",
        },
        { icon: require("@/assets/dev_icons/vuejs.svg"), name: "Vue.js 3" },
      ],
    };
  },
};
</script>

<script setup>
import skillCard from "../skillCardComponents/skillCard.vue";
</script>

<style scoped>
h2 {
  margin-bottom: 102.63px;
}

.skills-section {
  padding-bottom: 141px;
}

.skills-wrapper {
  padding-left: 141px;
  padding-right: 131px;
  row-gap: 20px;
}
</style>

<style>
.wrap {
  flex-wrap: wrap;
}
</style>
