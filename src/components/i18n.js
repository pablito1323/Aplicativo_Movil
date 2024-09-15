// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

// Importa tus archivos de traducción
import en from '/en.json';
import es from '/es.json';

// Configura i18next
i18n
  .use(initReactI18next) // pasa el i18n instance a react-i18next.
  .init({
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en', // Idioma por defecto si no hay traducción disponible
    resources: {
      en: {
        translation: en
      },
      es: {
        translation: es
      },
    },
    interpolation: {
      escapeValue: false, // React ya se encarga de escapar valores por defecto
    },
  });

// Detecta y cambia el idioma automáticamente basado en la configuración del dispositivo
RNLocalize.addEventListener('change', (context) => {
  const { languageTag } = context;
  i18n.changeLanguage(languageTag);
});

export default i18n;
