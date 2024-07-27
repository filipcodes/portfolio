<script setup>
import emailjs from "@emailjs/browser";
import { dropDown } from "../store/dropDownState.js";
</script>

<template>
  <div class="overlay" @click="emitClose">
    <div class="cont">
      <h2>Reach out</h2>
      <form ref="form" class="getintouchform form" @submit.prevent="sendMail">
        <!-- ! NAME -->
        <div class="namecont">
          <label for="name">Name</label>
          <input
            required
            placeholder="John Brown"
            id="name"
            type="text"
            v-model="name"
            class="name"
            name="name"
          />
        </div>

        <!-- ! EMAIL -->
        <div class="emailcont">
          <label for="email">Email</label>
          <input
            required
            placeholder="john@brown.com"
            id="email"
            type="email"
            v-model="email"
            class="email"
            name="email"
          />
        </div>

        <!-- ! MESSAGE -->
        <div class="messagecont">
          <label for="message">Message</label>
          <textarea
            required
            placeholder="Your message..."
            name="message"
            id="message"
            cols="30"
            rows="8"
            v-model="message"
            minlength="5"
            class="message-input"
          ></textarea>
        </div>

        <!-- ! SUBMIT BUTTON -->
        <button type="submit" class="send">
          {{ isBtnLoading ? "Sending the email..." : "Submit" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
export default {
  name: "GetInTouch",
  data() {
    return {
      name: "",
      email: "",
      message: "",

      showDropdown: false,
      isBtnLoading: false,
    };
  },
  methods: {
    emitClose(e) {
      e.target.classList[0] === "overlay" ? this.$emit("closeOverlay") : "";
    },

    deleteInputs() {
      this.name = "";
      this.email = "";
      this.message = "";
    },

    async sendMail() {
      this.isBtnLoading = true;

      // send the server request to send email
      try {
        await emailjs.sendForm(
          "service_5c5rd2h",
          "template_ucc2bip",
          this.$refs.form,
          "0bmkwpZ_HEx1IQsAMsZ9W"
        );

        this.deleteInputs();

        // some kind of success message
        dropDown.open("Message sent successfully!");

        // emit closing the popup
        setTimeout(() => {
          this.$emit("closeOverlay");
        }, 4100);
      } catch (error) {
        this.isBtnLoading = false;
        dropDown.open("An error has occured while trying to send the message!");
      }
    },
  },
  computed: {
    buttonText() {},
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/abstracts" as *;
@use "../assets/styles/queries" as *;

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 2;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.cont {
  width: 42%;
  position: absolute;
  // height: 80vh;
  background-color: $black;
  border-radius: $border-radius-medium;
  padding: 3.6rem 3.6rem 3.6rem 3.6rem;
  border: 1px solid grey;

  @include media("<=900px") {
    width: 80%;
  }

  @include media("<=500px") {
    width: 90%;
    padding: 3.6rem 3.6rem 2rem 3.6rem;
  }
}

h2 {
  font-size: 3.6rem;
  font-weight: 500;
  margin-bottom: 1.6rem;
  line-height: 1.2;
}

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  row-gap: 1.4rem;
  @include media("<=570px") {
    grid-template-columns: 1fr;
  }

  input,
  textarea,
  button {
    background-color: transparent;
    border: 1px solid grey;
    border-radius: $border-radius-small;
    width: 100% !important;
    padding: 0.8rem;
    color: white !important;

    &:focus {
      outline: 2px solid $orange;
      outline-offset: 1px;
    }
  }
}

label {
  display: block;
  margin-bottom: 0.6rem;
}

.smallcont:not(:last-child) {
  margin-bottom: 2.4rem;
}

textarea {
  resize: none;
}

.messagecont {
  grid-column: 1/3;

  @include media("<=570px") {
    grid-column: 1/2;
  }
}

.emailcont {
  @include media("<=570px") {
    grid-row: 2;
  }
}

.send {
  grid-column: 1/3;
  background-color: $orange;
  border: none;
  color: $black !important;
  font-weight: 500;
  margin-top: 1.2rem;
  border: 2px solid $orange;
  transition: all 0.3s ease;
  @include media("<=570px") {
    grid-column: 1;
  }

  &:hover {
    background-color: transparent;
    color: $orange !important;
  }

  &:active {
    background-color: #e64425;
    color: $black !important;
    outline: none;
  }
}

.callme {
  color: $white;
  z-index: 50;
  position: absolute;
  bottom: -4.8rem;
  left: 50%;
  width: 100%;
  text-align: center;
  transform: translate(-50%, 0);
  a:link,
  a:visited {
    text-decoration: underline;
  }

  a:hover {
    text-decoration: none;
  }
}

.message-input {
  padding: 1.8rem;
}
</style>
