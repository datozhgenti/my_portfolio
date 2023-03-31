<template>
  <transition name="fade">
    <main class="flex center-flex-element" v-if="pageOnStartActive">
      <div class="flex">
        <inputComp
          inputType="text"
          placeholderText="Enter Name, Please"
          style="font-size: 4vw"
          ref="nameInput"
          @keydown.enter="deletePageOnStart"
        ></inputComp>
        <img
          src="@/assets/arrowIcons/arrow-right.svg"
          alt="next button"
          class="border-bottom-gray"
          @click="deletePageOnStart"
        />
      </div>
    </main>
  </transition>
</template>

<script setup>
import inputComp from "./inputComponents/inputComp.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const nameInput = ref(null);

const pageOnStartActive = ref(true);

onMounted(() => {
  nameInput.value.input.focus();
});

function deletePageOnStart() {
  store.commit("getVisitorName", nameInput.value.input.value);
  pageOnStartActive.value = false;
  setTimeout(() => {
    store.commit("portfolioPageShow");
  }, 1100);
}
</script>

<style scoped>
main {
  height: 100vh;
}

img {
  cursor: pointer;
  width: 7vw;
  padding-bottom: 10px;
}
</style>

<style>
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 1s;
}
</style>
