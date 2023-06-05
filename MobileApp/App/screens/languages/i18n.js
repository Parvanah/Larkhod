import i18next from "i18next";
import Pashto from "./Pashto.json";
import Persian from "./Persian.json";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lan: "pe",
  fallbackLng: "pe",
  resources: {
    pa: Pashto,
    pe: Persian,
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});
export default i18next;
