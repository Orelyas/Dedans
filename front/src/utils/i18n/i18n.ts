import fr from "@/utils/i18n/fr.json";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

export const launchI18n = () => {
  i18next.use(initReactI18next).init({
    fallbackLng: "fr",
    resources: {
      fr: {
        translation: fr,
      },
    },
  });
};
