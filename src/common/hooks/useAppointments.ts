import { useContextSelector } from 'use-context-selector';
import { AppointmentsContext } from 'common/context/AppointmentsContext';

export function useAppointments() {
  const appointments = useContextSelector(AppointmentsContext, (appointments) => appointments.appointments);
  const loading = useContextSelector(AppointmentsContext, (appointments) => appointments.loading);
  const filters = useContextSelector(AppointmentsContext, (appointments) => appointments.filters);
  const offset = useContextSelector(AppointmentsContext, (appointments) => appointments.offset);
  const onChangeFilter = useContextSelector(AppointmentsContext, (appointments) => appointments.onChangeFilter);
  const onChangeOffset = useContextSelector(AppointmentsContext, (appointments) => appointments.onChangeOffset);

  return {
    appointments,
    loading,
    filters,
    offset,
    onChangeFilter,
    onChangeOffset,
  };
}
