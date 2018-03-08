import i18next from 'i18next';

import enMessage from './enMessage';

export default i18next.init({
  lng: 'en',
  debug: false,
  ns: ['auth', 'app', 'validation'],
  resources: {
    en: enMessage.en
  }
});
