import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import pt from './translations/ptbr.json'
import en from './translations/en.json'
import es from './translations/es.json'


i18n.use(initReactI18next).init({
  fallbackLng: localStorage.getItem('lang') || 'pt',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    pt: pt,
    en: en,
    es: es
  }
})