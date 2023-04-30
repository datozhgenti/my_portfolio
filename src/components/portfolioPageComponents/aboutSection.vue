<template>
  <section class="about-section" id="about">
    <div class="about-top-wrapper text-align-center">
      <h2 class="font-48 line-height-62">About</h2>
      <div class="center-with-margin">
        <p class="font-18">
          Hi! I'm David, a front-end developer based in Tbilisi. With 7 years of
          experience, I specialize in creating beautiful and user-friendly
          websites using HTML, CSS, JavaScript and Vue.js. Let's work together
          to bring your ideas to life!
        </p>
      </div>
    </div>
    <div class="about-bottom-wrapper flex space-evently wrap">
      <contactCard
        v-for="(info, index) in contactInfos"
        :key="info"
        @click="contactInfoAnchorClick(index)"
      >
        <template #contactName>
          <p class="font-18 line-height-23 weight-700">{{ info.name }}</p>
        </template>
        <template #contactInfo>
          <linkComp
            class="infoAnchor font-16"
            :target="info.linkTarget"
            :hrefProp="info.link"
            >{{ info.info }}</linkComp
          >
        </template>
      </contactCard>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contactInfos: [
        {
          name: "Email Address",
          link: "mailto:datozhgenti1998@gmail.com",
          info: "datozhgenti1998@gmail.com",
          linkTarget: "",
        },
        {
          name: "Phone",
          link: "tel:+995591404227",
          info: "+995591404227",
          linkTarget: "",
        },
        {
          name: "Github",
          link: "https://github.com/datozhgenti",
          info: "https://github.com/datozhgenti",
          linkTarget: "_",
        },
      ],
    };
  },
};
</script>

<script setup>
import contactCard from "../contactCardsComponents/contactCard.vue";
import linkComp from "../anchorTagComponents/linkComp.vue";

function contactInfoAnchorClick(index) {
  const infoAnchors = document.querySelectorAll(".infoAnchor");

  infoAnchors[index].click();
}
</script>

<style scoped>
h2 {
  margin-bottom: 38px;
}

p {
  line-height: 23.44px;
}

.about-top-wrapper > div {
  width: 745px;
  padding: 0 5px;
}

.about-bottom-wrapper {
  padding: 0 224px;
  padding-right: 204px;
  margin-top: 64px;
  row-gap: 30px;
}

.about-section {
  padding-bottom: 120px;
}

@media all and (max-width: 851px) {
  .about-bottom-wrapper {
    justify-content: center;
  }
}

@media all and (max-width: 785px) {
  .about-top-wrapper > div {
    width: auto;
  }
}
</style>

<style>
.text-align-center {
  text-align: center;
}

.space-evently {
  justify-content: space-evenly;
}

.font-16 {
  font-size: 16px;
}
</style>
