import { api } from 'services/api';
import { CREATE_SCHEDULE } from 'services/routes';
import CreateScheduleMapper from 'services/mappers/CreateScheduleMapper';
import { UserProps } from 'common/interface/UserProps';
import { EmployeeProps } from 'common/interface/EmployeeProps';
import { HourProps } from 'common/interface/HourProps';
import { ResponseProps } from 'common/interface/ResponseProps';
import { ScheduleResponseProps } from 'common/interface/ScheduleResponseProps';

export async function createSchedule(user: UserProps, products: string[], employees: EmployeeProps[], companyId: number, date: Date, hour: HourProps, observation: string, tokenCapcha: string) {
  try {
    const isSchedule = CreateScheduleMapper.toPresistence(user, products, employees, companyId, date, hour, observation);

    const { data } = await api.post(`${CREATE_SCHEDULE}`, isSchedule, {
      timeout: 90000,
      headers: {
        captchatoken: tokenCapcha,
      },
    }) as { data: ResponseProps<ScheduleResponseProps> };

    if (!data.ok) {
      throw new Error(data.mensagem);
    }

    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
