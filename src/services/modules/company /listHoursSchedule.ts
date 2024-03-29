import { ResponseProps } from 'common/interface/ResponseProps';
import { ScheduleHoursProps } from 'common/interface/ScheduleHoursProps';
import { UserProps } from 'common/interface/UserProps';
import { format, addDays } from 'date-fns';

import { api } from 'services/api';
import { GET_HOURS_SCHEDULE } from 'services/routes';

export async function listHoursSchedule(companyId: number, employeeId: string, minutes: number, user?: UserProps) {
  try {
    const isDateStart = format(new Date(), 'yyyy-MM-dd');
    const isDateEnd = format(addDays(new Date(), 60), 'yyyy-MM-dd');

    let isHeaders;

    if (user) {
      isHeaders = {
        'token-id': user.token_whypwd,
        'auth-uid': user.id,
      };
    }

    const { data } = await api.get(`${GET_HOURS_SCHEDULE}?idEmpresa=${companyId}&date1=${isDateStart}&idFuncionario=${employeeId}&date2=${isDateEnd}&minutos=${minutes}`, {
      timeout: 60000,
      headers: isHeaders,
    }) as { data: ResponseProps<ScheduleHoursProps[]> };

    if (!data.ok) {
      throw new Error(data.mensagem ?? 'Ocorreu um erro de comunicação.');
    }

    return data.obj;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
