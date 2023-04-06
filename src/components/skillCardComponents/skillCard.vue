<template>
  <div class="skill-card skill-and-project-card-sizes relative opacity-0">
    <div>
      <img
        :src="iconUrl"
        width="57"
        height="57"
        :alt="`${skillName} icon`"
        class="block"
      />
    </div>
    <h3 class="font-36">{{ skillName }}</h3>
  </div>
</template>

<script>
export default {
  props: ["iconUrl", "skillName"],
};
</script>

<script setup>
import observeAnimation from "@/composables/observe";

observeAnimation(".skill-card", "fade-left", 1);
</script>

<style scoped>
.skill-card {
  background-color: #212121;
  padding: 34.86px 70px 36px 50px;
  margin: 0 5px;
}

.skill-card::after {
  content: "";
  height: 5px;
  width: 0;
  display: block;
  background-color: var(--green-color);
  position: absolute;
  left: 0;
  bottom: 0;
}

.skill-card:hover::after {
  animation: greenLineAnim 1s ease forwards;
}

.skill-card:hover {
  border: 1px solid #000000;
}

h3 {
  color: #535353;
  margin-top: 29.67px;
}

@keyframes greenLineAnim {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@media all and (max-width: 385px) {
  h3 {
    font-size: 6vw;
  }

  .skill-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
  }
}
</style>

<style>
.skill-and-project-card-sizes {
  width: 349px;
  height: 241px;
}

@keyframes fade-left {
  from {
    transform: translate(40px);
  }
  to {
    transform: translate(0);
    opacity: 1;
  }
}

.fade-left {
  animation: fade-left 0.5s linear forwards;
}
</style>
