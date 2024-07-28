import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";

export const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    //! ENGLISH
    en: {
      navigation: {
        contactMeButton: "Get in touch",
      },

      intro: {
        description:
          "My name is Filip, and I am a Front-end developer based in Slovakia. I am passionate about creating smooth, engaging, and appealing digital experiences. ",
        socialLinkDescriptions: {
          github: "Check out my GitHub",
          linkedin: "Check out my LinkedIn",
          cv: "Download my CV",
        },
      },

      //! SLOVAK
      sk: {},
    },
  },
});

createApp(App).mount("#app");
