import {
  useCallback, useEffect, useState,
} from 'react';
import { createContext } from 'use-context-selector';

import { fetchAppointments } from 'services/modules/appointments';
import { useAuth } from 'common/hooks/useAuth';
import { useToast } from 'common/hooks/useToast';
import { AppointmentsProps } from 'common/interface/AppointmentsProps';
import { FilterAppointmentsProps } from 'common/interface/FilterAppointmentsProps';

interface AppointmentsContextProps {
    appointments: AppointmentsProps[];
    loading?: 'appointments';
    filters?: FilterAppointmentsProps;
    onChangeFilter: (filter: FilterAppointmentsProps) => void;
}

export const AppointmentsContext = createContext({} as AppointmentsContextProps);

export function AppointmentsProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const { onToast } = useToast();

  const [isLoading, setIsLoading] = useState<'appointments'>();
  const [isAppointments, setIsAppointments] = useState<AppointmentsProps[]>([]);
  const [isFilters, setIsFilters] = useState<FilterAppointmentsProps>();

  const handleLoadAppointments = useCallback(async () => {
    try {
      setIsLoading('appointments');
      if (user && user.id) {
        const appointments = await fetchAppointments(user.id);

        if (appointments) {
          setIsAppointments(appointments);
        }
      }

      setIsLoading(undefined);
    } catch (err: any) {
      setIsLoading(undefined);
      onToast({
        message: err ?? 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [user, onToast]);

  const handleChangeFilter = useCallback((filter: FilterAppointmentsProps) => {
    setIsFilters((current) => ({
      ...current,
      ...filter,
    }));
  }, []);

  useEffect(() => {
    handleLoadAppointments();
  }, [handleLoadAppointments]);

  return (
    <AppointmentsContext.Provider value={{
      appointments: isAppointments, loading: isLoading, filters: isFilters, onChangeFilter: handleChangeFilter,
    }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
}
