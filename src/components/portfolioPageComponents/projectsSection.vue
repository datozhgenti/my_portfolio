<template>
  <section class="projects-section" id="projects">
    <h2 class="font-48 line-height-62 text-align-center margin-bottom-102">
      My Projects
    </h2>
    <div class="projects-and-skills-wrapper flex space-between wrap">
      <projectCard
        v-for="project in projects"
        :key="project"
        :projectImg="project.img"
        :projectUrl="project.url"
        :projectName="project.name"
      ></projectCard>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          img: require("@/assets/project_images/finsweet.png"),
          url: "https://datozhgenti.github.io/finsweet_vue/",
          name: "Finsweet Website",
        },
        {
          img: require("@/assets/project_images/fitnesso.png"),
          url: "https://datozhgenti.github.io/fitnesso/",
          name: "Fitnesso Website",
        },
        {
          img: require("@/assets/project_images/retail.png"),
          url: "https://datozhgenti.github.io/Acme-Shop-Website/",
          name: "Retail Website",
        },
        {
          img: require("@/assets/project_images/restaraunt.png"),
          url: "https://datozhgenti.github.io/restaraunt-website/",
          name: "Restaraunt Website",
        },
      ],
    };
  },
};
</script>

<script setup>
import projectCard from "../projectCardComponents/projectCard.vue";
</script>

<style scoped>
.projects-section {
  margin-bottom: 100px;
}
</style>
