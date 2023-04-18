import { StatusAppointmentsProps } from 'common/interface/StatusAppointmentsProps';
import { UseTableAppointments } from './types';

export function useTableAppointments(): UseTableAppointments {
  const getStatus = (status: StatusAppointmentsProps) => {
    switch (status) {
      case 'ATENDIDO':
      case 'CONFIRMADO':
        return 'Atendido';
      case 'AGENDADO':
        return 'Pendente';
      case 'REQ_CANCELAMENTO':
        return 'Rq. de Cancelamento';
      case 'CANCELADO':
        return 'Cancelado';
      default:
        return 'Cancelado';
    }
  };

  return {
    getStatus,
  };
}
