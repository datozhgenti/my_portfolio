<template>
  <section class="contact-section" id="contact">
    <h2 class="font-48 line-height-62 text-align-center">Get in touch</h2>
    <div class="form-wrapper">
      <form @submit.prevent="sendEmail">
        <div class="form grid space-between center-with-margin">
          <inputComp
            v-for="(input, index) in inputs"
            :key="input"
            :inputType="input.type"
            :placeholderText="input.placeholder"
            @keydown="inputValidation(index, $event)"
            :pattern="input.pattern"
            ref="contactInput"
            required
            autocomplete="off"
          ></inputComp>

          <textarea
            placeholder="Message"
            ref="contactTextarea"
            required
          ></textarea>
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
import Email from "@/smtp.js";
export default {
  data() {
    return {
      inputs: [
        { type: "text", placeholder: "Name" },
        { type: "text", placeholder: "Last name" },
        {
          type: "email",
          placeholder: "Email",
        },
        { type: "tel", placeholder: "Phone Number" },
      ],
    };
  },
  methods: {
    sendEmail() {
      const contactsInputs = this.$refs.contactInput;
      const conactTextarea = this.$refs.contactTextarea;

      Email.send({
        SecureToken: "45ae150e-84b4-43e6-b2b8-1cfb51aac945",
        To: "datozhgenti1998@gmail.com",
        From: "datozhgenti1998@gmail.com",
        Subject: `from ${contactsInputs[0].input.value} ${contactsInputs[1].input.value}`,
        Body: `<b>Email:</b> ${contactsInputs[2].input.value} <br> <b>Phone Number:</b> ${contactsInputs[3].input.value} <br> <b>message:</b> ${conactTextarea.value} `,
      }).then(() => {
        this.$store.commit("messageSentAlertDisplay");
        conactTextarea.value = "";

        contactsInputs.forEach((val) => {
          val.input.value = "";
        });
      });
    },
    inputValidation(index, e) {
      if (index === 0 || index === 1) {
        allowOnlyLetters(e);
      }
    },
  },
};
</script>

<script setup>
import inputComp from "../inputComponents/inputComp.vue";
import buttonComp from "../buttonComponents/buttonComp.vue";
import allowOnlyLetters from "@/composables/allowOnlyLetters";
</script>

<style scoped>
input:required:focus:invalid {
  border-bottom-color: red !important;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  appearance: none;
  margin: 0;
}

input[type="number"] {
  appearance: textfield;
}

textarea:required:focus:invalid {
  border-color: red !important;
}
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
