import { useAppointments } from 'common/hooks/useAppointments';
import { StatusAppointmentsProps } from 'common/interface/StatusAppointmentsProps';
import { useCallback, useEffect } from 'react';
import { UseTableAppointments } from './types';

export function useTableAppointments(): UseTableAppointments {
  const { appointments, onChangeOffset } = useAppointments();

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

  const handleScrollWindow = useCallback(() => {
    if (appointments && appointments.length > 0) {
      onChangeOffset(appointments.length);
    }
  }, [appointments, onChangeOffset]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.innerHeight + document.documentElement.scrollTop === (window.document.scrollingElement as { scrollHeight: number }).scrollHeight) {
        handleScrollWindow();
      }
    });
  }, [handleScrollWindow]);

  return {
    getStatus,
    appointments,
  };
}
