import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ar } from "./locales/ar";
import { en } from "./locales/en";

const resources = {
  en: {
    translation: en
  },
  ar: {
    translation: ar
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;