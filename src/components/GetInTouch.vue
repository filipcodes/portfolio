<script setup>
import emailjs from "@emailjs/browser";
</script>

<template>
  <div class="overlay" @click="emitClose">
    <div :class="['dropdown', showDropdown ? 'show-dropdown' : '']">
      <p>
        {{
          showDropdown === "success"
            ? "Your message was sent successfully"
            : "An error occured"
        }}
      </p>
      <button @click="$emit('closeOverlay')" class="close__dropdown">
        close
      </button>
      <span class="timer"></span>
    </div>
    <div class="cont">
      <h2>Reach out</h2>
      <form ref="form" class="getintouchform form" @submit.prevent="sendMail">
        <!-- ! NAME -->
        <div class="namecont smallcont">
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
        <div class="emailcont smallcont">
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
        <div class="messagecont smallcont">
          <label for="message">Message</label>
          <textarea
            required
            placeholder="Your message..."
            name="message"
            id="message"
            cols="30"
            rows="10"
            v-model="message"
            minlength="5"
          ></textarea>
        </div>

        <!-- ! SUBMIT BUTTON -->
        <button type="submit" class="send" @click="messageSent">
          {{ btnLoading ? "Sending the email..." : "Submit" }}
        </button>
      </form>
      <p class="callme">
        Or call me instead: <a href="tel:+421950748927">+421950748927</a>
      </p>
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
      btnLoading: false,
    };
  },
  methods: {
    emitClose(e) {
      e.target.classList[0] === "overlay" ? this.$emit("closeOverlay") : "";
    },

    sendMail() {
      // console.log("form element:", this.$refs.form);

      // put the button into loading mode
      this.btnLoading = true;

      // send the server request to send email
      emailjs
        .sendForm(
          "service_5c5rd2h",
          "template_ucc2bip",
          this.$refs.form,
          "YohwYMhZzD3uJBxcE"
        )
        .then(
          (result) => {
            // delete the input text
            this.name = "";
            this.email = "";
            this.message = "";

            // some kind of success message
            this.showDropdown = "success";
            // dropdown from above

            // emit closing the popup
            setTimeout(() => {
              this.$emit("closeOverlay");
            }, 4100);
          },
          (error) => {
            console.log("Failed", error.text);
          }
        );
    },
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
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.dropdown {
  position: fixed;
  top: 1.2rem;
  left: 50%;
  width: max-content;
  background-color: lighten($black, 5%);
  padding: 0.6rem 0.6rem 0.6rem 1.8rem;
  transform: translate(-50%, calc(-100% - 2.4rem));
  color: $white;
  display: flex;
  align-items: center;
  gap: 4rem;
  border-radius: $border-radius-small;
  overflow: hidden;
  transition: transform 1s ease;

  .close__dropdown {
    display: block;
    text-transform: uppercase;
    padding: 1rem 0.8rem;
    margin: 0.2rem 0;
    background-color: transparent;
    color: darken($grey, 20%);
    border-radius: $border-radius-small;
    letter-spacing: 1px;
    font-weight: 500;

    &:hover {
      background-color: darken($grey, $amount: 72%);
    }
  }

  .timer {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: $orange;
    height: 3px;
    width: 100%;
    transition: all 4s linear;
    transform: translateX(-100%);
  }
}

.show-dropdown {
  // move it into view
  transform: translate(-50%, 0);
  // animate the timer

  .timer {
    transform: translateX(0);
  }
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
      outline: 1px solid $orange;
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

  @include media("<=570px") {
    grid-column: 1;
  }

  &:active {
    background-color: #e64425;
    outline: none;
  }
}

.callme {
  color: $white;
  z-index: 100;
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
</style>
