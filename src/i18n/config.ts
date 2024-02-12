
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from "../locales/en/translation.json";
import translationDE from "../locales/de/translation.json";

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  }
};

export const supportedLngs = {
       en: "en",
       de: "de",
     };


i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    supportedLngs: Object.keys(resources),
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
