import { ResponseProps } from 'common/interface/ResponseProps';
import { api } from 'services/api';
import { CANCEL_SCHEDULE } from 'services/routes';

export async function cancelSchedule(scheduleId: string, companyId: number, userId: string, tokenId: string) {
  try {
    const { data } = await api.post(CANCEL_SCHEDULE, {
      idAgenda: scheduleId,
      idEmpresa: companyId,
      clienteUid: userId,
    }, {
      timeout: 90000,
      headers: {
        'token-id': tokenId,
        'auth-uid': userId,
      },
    }) as { data: ResponseProps<string> };

    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
