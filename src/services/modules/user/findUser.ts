import { HeadersProps } from 'common/interface/HeadersProps';
import { api } from 'services/api';
import { GET_USER } from 'services/routes';

export async function findUser(id: string, tokenId?: string, tokenWhypwd?: string) {
  try {
    const headers = {
      'token-id': tokenId,
      'auth-uid': id,
    } as HeadersProps;

    if (tokenWhypwd) {
      headers.token_whypwd = tokenWhypwd;
      delete headers['token-id'];
    }

    const { data } = await api.get(`${GET_USER}${id}`, {
      timeout: 10000,
      headers: {
        ...headers,
      },
    });

    return data;
  } catch (err) {
    return new Error('Ocorreu um erro de comunicação.');
  }
}
