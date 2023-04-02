import { getCookie } from 'cookies-next';

export function getToken() {
  const isToken = getCookie('@Auth:token');

  return isToken;
}
