<template>
  <porfolioPage></porfolioPage>
</template>

<script setup>
import porfolioPage from "@/main_components/portfolioPage.vue";
</script>

<style>
/* font import */

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");

/* starter styles of all elements */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--text-starter-color);
  font-family: "DM Sans", sans-serif;
}

/* css variables */

:root {
  --page-background: #171717;
  --text-starter-color: #ffffff;
  --green-color: #27ae60;
}

/* body styles */

body {
  background: var(--page-background);
}

/* flex styles */

.flex {
  display: flex;
}

.center-flex-element {
  justify-content: center;
  align-items: center;
}

/* borders */

#border-bottom-gray {
  border-bottom: 1px solid #4f4f4f;
}

.border-bottom-gray {
  border-bottom: 1px solid #4f4f4f;
}
</style>
