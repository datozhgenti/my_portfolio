<template>
  <div class="preloader-wrapper flex center-flex-element absolute">
    <img src="@/assets/loader-gifs/greenLoader.gif" alt="preloader image" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.preloader-wrapper {
  height: 100vh;
  z-index: 1;
  background-color: #171717;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
