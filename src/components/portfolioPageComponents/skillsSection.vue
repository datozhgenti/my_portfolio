<template>
  <section class="skills-section" id="skills">
    <h2 class="font-48 line-height-62 text-align-center margin-bottom-102">
      What i do
    </h2>
    <div class="projects-and-skills-wrapper flex space-evently wrap">
      <skillCard
        v-for="(skill, index) in skills"
        :key="skill"
        :iconUrl="skill.icon"
        :skillName="skill.name"
        :style="{
          whiteSpace: indexesOfNoWrapSkill.includes(index)
            ? 'nowrap'
            : 'initial',
        }"
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
        { icon: require("@/assets/dev_icons/vuejs.svg"), name: "VUE.JS 3" },
        { icon: require("@/assets/dev_icons/jquery.svg"), name: "JQUERY" },
        {
          icon: require("@/assets/dev_icons/bootstrap.svg"),
          name: "BOOTSTRAP 5",
        },
        {
          icon: require("@/assets/dev_icons/sass.svg"),
          name: "SASS",
        },
      ],
      indexesOfNoWrapSkill: [5],
    };
  },
};
</script>

<script setup>
import skillCard from "../skillCardComponents/skillCard.vue";
</script>

<style scoped>
.skills-section {
  padding-bottom: 141px;
}
</style>

<style>
.wrap {
  flex-wrap: wrap;
}

.projects-and-skills-wrapper {
  padding-left: 141px;
  padding-right: 131px;
  row-gap: 20px;
}

.margin-bottom-102 {
  margin-bottom: 102.63px;
}

@media all and (max-width: 1348px) {
  .projects-and-skills-wrapper {
    justify-content: space-evenly;
  }
}
</style>
