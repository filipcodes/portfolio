import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";

const app = createApp(App);

app.config.performance = true;

const i18n = createI18n({
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
      footer:
        "If interested in hiring me, or just want to chat, don't be afraid to get in touch. ",
    },
    //! SLOVAK
    sk: {
      navigation: {
        contactMeButton: "Kontakt",
      },

      intro: {
        description:
          "Volám sa Filip a som Front-end vývojár žijúci na Slovensku. Venujem sa tvorbe interaktívnych, user-friendly aplikácií a digitálnych rozhraní.",
        socialLinkDescriptions: {
          github: "Pozrite si môj GitHub",
          linkedin: "Pozrite si môj LinkedIn",
          cv: 'Pozrite si moje "CVčko"',
        },
      },
      footer:
        "Ak máte záujem o spoluprácu, alebo len chcete pokecať, neváhajte ma kontaktovať.",
    },
  },
});

export default i18n;
app.use(i18n);

app.mount("#app");
