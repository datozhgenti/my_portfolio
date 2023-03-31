<template>
  <div class="skill-card relative">
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

<style scoped>
.skill-card {
  width: 349px;
  height: 241px;
  background-color: #212121;
  padding: 34.86px 70px 36px 50px;
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
</style>
