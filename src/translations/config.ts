import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEn from '@/translations/en/hello.json'
import translationPl from '@/translations/pl/hello.json'

const LANGUAGES = {
  EN: 'en',
  PL: 'pl',
} as const

export const resources = {
  [LANGUAGES.EN]: { translation: translationEn },
  [LANGUAGES.PL]: { translation: translationPl },
}

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources,
  interpolation: {
    escapeValue: false,
  },
})
