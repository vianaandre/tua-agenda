import { useContextSelector } from 'use-context-selector';
import { AppointmentsContext } from 'common/context/AppointmentsContext';

export function useAppointments() {
  const appointments = useContextSelector(AppointmentsContext, (appointments) => appointments.appointments);
  const loading = useContextSelector(AppointmentsContext, (appointments) => appointments.loading);
  const filters = useContextSelector(AppointmentsContext, (appointments) => appointments.filters);
  const onChangeFilter = useContextSelector(AppointmentsContext, (appointments) => appointments.onChangeFilter);

  return {
    appointments,
    loading,
    filters,
    onChangeFilter,
  };
}
