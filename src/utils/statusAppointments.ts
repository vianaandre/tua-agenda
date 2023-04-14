import { StatusAppointmentsProps } from 'common/interface/StatusAppointmentsProps';

type StatusAppointmentsType = {
    text: string;
    status: StatusAppointmentsProps
}

export const statusAppointments: StatusAppointmentsType[] = [
  {
    text: 'Concluídos',
    status: 'ATENDIDO',
  },
  {
    text: 'Pendentes',
    status: 'AGENDADO',
  },
  {
    text: 'Cancelados',
    status: 'CANCELADO',
  },
  {
    text: 'Req. Cancelamentos',
    status: 'REQ_CANCELAMENTO',
  },
];
