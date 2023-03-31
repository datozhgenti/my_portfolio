<template>
  <section class="about-section">
    <div class="about-top-wrapper text-align-center">
      <h2 class="font-48 line-height-62">About</h2>
      <p class="font-18">
        Hi! I'm David, a front-end developer based in Tbilisi. With 7 years of
        experience, I specialize in creating beautiful and user-friendly
        websites using HTML, CSS, JavaScript and Vue.js. Let's work together to
        bring your ideas to life!
      </p>
    </div>
    <div class="about-bottom-wrapper flex space-between">
      <contactCard @click="contactInfoAnchorClick(0)">
        <template #contactName>
          <p class="font-18 line-height-23 weight-700">Email Address</p>
        </template>
        <template #contactInfo>
          <linkComp
            class="infoAnchor"
            hrefProp="mailto:datozhgenti1998@gmail.com"
            >datozhgenti1998@gmail.com</linkComp
          >
        </template>
      </contactCard>
      <contactCard @click="contactInfoAnchorClick(1)">
        <template #contactName>
          <p class="font-18 line-height-23 weight-700">Phone</p>
        </template>
        <template #contactInfo>
          <linkComp class="infoAnchor" hrefProp="tel:+995591404227"
            >+995591404227</linkComp
          >
        </template>
      </contactCard>
      <contactCard @click="contactInfoAnchorClick(2)">
        <template #contactName>
          <p class="font-18 line-height-23 weight-700">Github</p>
        </template>
        <template #contactInfo>
          <linkComp
            class="infoAnchor"
            target="_"
            hrefProp="https://github.com/datozhgenti"
            >https://github.com/datozhgenti</linkComp
          >
        </template>
      </contactCard>
    </div>
  </section>
</template>

<script>
export default {};
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

.about-top-wrapper {
  padding: 0 347px;
  padding-right: 348px;
}

.about-bottom-wrapper {
  padding: 0 224px;
  padding-right: 204px;
  margin-top: 64px;
}

.about-section {
  padding-bottom: 120px;
}
</style>

<style>
.text-align-center {
  text-align: center;
}
</style>
