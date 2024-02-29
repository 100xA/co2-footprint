
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from "../locales/en/translation.json";
import translationDE from "../locales/de/translation.json";
import translationAR from "../locales/ar/translation.json";


const resources = {
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  },
  ar: {
    translation: translationAR
  }
};

export const supportedLngs = {
       en: "en",
       de: "de",
       ar: "ar",
     };


i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    supportedLngs: Object.keys(resources),
  });

export default i18n;
