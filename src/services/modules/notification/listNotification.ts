import { ResponseProps } from 'common/interface/ResponseProps';
import { api } from 'services/api';
import { GET_NOTIFICATIONS } from 'services/routes';

export async function listNotification(tokenWhypwd: string, clientId: string, offset: number, limit: number) {
  try {
    const { data } = await api.get(`${GET_NOTIFICATIONS}?clienteId=${clientId}&offset=${offset}&limit=${limit}`, {
      headers: {
        'token-id': tokenWhypwd,
        'auth-uid': clientId,
      },
      timeout: 4000,
    }) as { data: ResponseProps<any> };

    if (!data.ok) throw new Error(data.mensagem);

    return data.obj;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
