// i18n.js
import { createI18n } from "vue-i18n";

// Définissez vos messages de traduction

// Import translation files
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import pt from "./locales/pt.json";

const messages = { fr, en, pt };

// Créez une instance de vue-i18n
const i18n = createI18n({
  locale: "fr", // Langue par défaut
  fallbackLocale: "fr", // Langue de secours
  messages
});

export default i18n;
