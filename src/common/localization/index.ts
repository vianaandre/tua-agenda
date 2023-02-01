import pt from './pt/messages.json';
import en from './en/messages.json';
import es from './es/messages.json';
import { LOCALES } from './locales';

export const messages = {
  [LOCALES.PORTUGUES]: {
    ...pt,
  },
  [LOCALES.ENGLISH]: {
    ...en,
  },
  [LOCALES.ESPANHOL]: {
    ...es,
  },
};
