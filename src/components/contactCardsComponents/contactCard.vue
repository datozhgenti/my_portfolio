<template>
  <div class="contact-card text-align-center pointer">
    <div class="big-circle border-radius-50 flex center-flex-element">
      <div class="small-circle border-radius-50"></div>
    </div>
    <slot name="contactName"> </slot>
    <slot name="contactInfo"> </slot>
  </div>
</template>

<script>
export default {};
</script>

<script setup></script>

<style scoped>
.contact-card {
  width: 212px;
}
.big-circle {
  width: 62px;
  height: 62px;
  background-color: #212121;
  margin: 0 auto;
  margin-bottom: 18px;
}

.small-circle {
  width: 12px;
  height: 12px;
  background-color: var(--green-color);
}

p {
  margin-bottom: 3px;
}

.contact-card:hover .small-circle {
  animation: greenCircleAnim 1s ease-in infinite;
}
</style>

<style>
.line-height-23 {
  line-height: 23.44px;
}

.weight-700 {
  font-weight: 700;
}

@keyframes greenCircleAnim {
  from {
    width: 12px;
    height: 12px;
  }
  to {
    width: 100%;
    height: 100%;
  }
}
</style>
