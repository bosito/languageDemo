import { setupI18n } from '@lingui/core';
import enMessages from './src/locales/en/messages.js';

export const i18n = setupI18n({
  language: 'en',
  catalogs: {
    en: enMessages,
  },
});

export const changeActiveLanguage = newActiveLanguage => {
  const catalog =
    newActiveLanguage === 'en' ? { en: enMessages } : { es: require('./src/locales/es/messages.js') };
  i18n.load(catalog);
  console.log('i18n -->', i18n);
  i18n.activate(newActiveLanguage);
  return i18n;
};