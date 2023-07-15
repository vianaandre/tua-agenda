import pt from './BR/messages.json';
import en from './US/messages.json';
import es from './ES/messages.json';
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
