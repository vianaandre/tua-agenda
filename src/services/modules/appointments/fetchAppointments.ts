import { AppointmentsProps } from 'common/interface/AppointmentsProps';
import { ResponseProps } from 'common/interface/ResponseProps';
import { getCookie } from 'cookies-next';

import { api } from 'services/api';
import { FETCH_APPOINTMENTS } from 'services/routes';
import { LIMIT_PER_PAGE_APPOINTMENTS } from 'utils/constant';

export async function fetchAppointments(userId: string, offset: number) {
  try {
    const isTokenWhypwd = getCookie('@Auth:token');

    if (isTokenWhypwd) {
      const { data } = await api.get(`${FETCH_APPOINTMENTS}/${userId}?offset=${offset}&limit=${LIMIT_PER_PAGE_APPOINTMENTS}`, {
        timeout: 30000,
        headers: {
          'token-id': isTokenWhypwd,
          'auth-uid': userId,
        },
      }) as { data: ResponseProps<AppointmentsProps[]> };

      if (data.ok) {
        return data.obj;
      }
      throw new Error(data.mensagem ?? 'Ocorreu um erro de comunicação.');
    } else {
      throw new Error('Ocorreu um erro de comunicação.');
    }
  } catch (err: any) {
    throw new Error(err.message);
  }
}
