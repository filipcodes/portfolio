import { reactive } from "vue";

export const dropDown = reactive({
  isOpen: false,
  text: "Something something",

  open(message) {
    if (!message) {
      console.error("Message is required for creation of a dropdown");
      return;
    }

    if (this.isOpen) {
      this.close();
    }

    this.text = message;
    this.isOpen = true;

    setTimeout(() => {
      this.close();
    }, 4000);
  },

  close() {
    this.isOpen = false;
    this.text = "";
  },
});
