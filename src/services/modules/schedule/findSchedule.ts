import { ResponseProps } from 'common/interface/ResponseProps';
import { ScheduleResponseProps } from 'common/interface/ScheduleResponseProps';
import { apiAlternative } from 'services/api';
import { GET_SCHEDULE } from 'services/routes';

export async function findSchedule(companyId: string, scheduleId: string, tokenWhypwd: string, clientId: string) {
  try {
    const { data } = await apiAlternative.get(`https://uzer-ticket.herokuapp.com/${process.env.REACT_APP_BACKEND_G_CLIENT}${GET_SCHEDULE}?idEmpresa=${companyId}&idAgenda=${scheduleId}`, {
      headers: {
        timeout: 1000,
        'token-id': tokenWhypwd,
        'auth-uid': clientId,
      },
    }) as { data: ResponseProps<ScheduleResponseProps> };

    if (data.ok && data.obj) {
      return data;
    }
    if (!data.ok) {
      throw new Error(data.mensagem);
    }
  } catch (err: any) {
    throw new Error(err.message);
  }
}
