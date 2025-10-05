import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from '@/translations/en/hello.json';
import translationAr from '@/translations/ar/hello.json';

const LANGUAGES = {
  EN: 'en',
  AR: 'ar',
} as const;

export const resources = {
  [LANGUAGES.EN]: { translation: translationEn },
  [LANGUAGES.AR]: { translation: translationAr },
};

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources,
  interpolation: {
    escapeValue: false,
  },
});
