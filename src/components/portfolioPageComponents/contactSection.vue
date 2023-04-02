<template>
  <section class="contact-section">
    <h2 class="font-48 line-height-62 text-align-center">Get in touch</h2>
    <div class="form-wrapper">
      <form @submit.prevent="">
        <div class="form grid space-between center-with-margin">
          <inputComp
            v-for="input in inputs"
            :key="input"
            :inputType="input.type"
            :placeholderText="input.placeholder"
          ></inputComp>

          <textarea placeholder="Message"></textarea>
          <div class="submit-btn-wrapper text-align-center">
            <buttonComp
              class="block weight-500 inline-block"
              backroundProp="var(--green-color)"
              type="submit"
              >Submit Now</buttonComp
            >
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      inputs: [
        { type: "text", placeholder: "Name" },
        { type: "text", placeholder: "Last name" },
        { type: "email", placeholder: "Email" },
        { type: "tel", placeholder: "Phone Number" },
      ],
    };
  },
};
</script>

<script setup>
import inputComp from "../inputComponents/inputComp.vue";
import buttonComp from "../buttonComponents/buttonComp.vue";
</script>

<style scoped>
.contact-section {
  margin: 0 7px;
  margin-bottom: 70px;
}

h2 {
  margin-bottom: 82px;
}

.form {
  grid-template-columns: repeat(2, 358px);
  width: 753px;
  row-gap: 47px;
}

textarea {
  resize: none;
  border: 1px solid #4f4f4f;
  grid-column: span 2;
  background: transparent;
  height: 109px;
  padding-top: 10px;
  padding-left: 12px;
}

textarea:focus {
  outline: none;
}

.submit-btn-wrapper {
  grid-column: span 2;
}

@media all and (max-width: 790px) {
  .form {
    width: auto;
  }
}

@media all and (max-width: 740px) {
  .form {
    grid-template-columns: 100%;
    justify-content: center;
  }

  textarea {
    grid-column: span 1;
  }

  .submit-btn-wrapper {
    grid-column: span 1;
  }
}
</style>

<style>
.grid {
  display: grid;
}
</style>
