import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { createContext } from 'use-context-selector';

// import { fetchAppointments } from 'services/modules/appointments';
import { useAuth } from 'common/hooks/useAuth';
import { useToast } from 'common/hooks/useToast';
import { AppointmentsProps } from 'common/interface/AppointmentsProps';
import { FilterAppointmentsProps } from 'common/interface/FilterAppointmentsProps';
import { LIMIT_PER_PAGE_APPOINTMENTS } from 'utils/constant';
import { FETCH_APPOINTMENTS } from 'services/routes';
import { usePaginationAppointments } from 'common/hooks/usePaginationAppointments';
import { ResponseProps } from 'common/interface/ResponseProps';

interface AppointmentsContextProps {
    appointments: AppointmentsProps[];
    loading?: 'appointments' | 'appointments-scroll';
    filters?: FilterAppointmentsProps;
    offset: number;
    onChangeFilter: (filter: FilterAppointmentsProps) => void;
    onChangeOffset: (newOffset: number) => void;
}

export const AppointmentsContext = createContext({} as AppointmentsContextProps);

export function AppointmentsProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const { onToast } = useToast();

  const [isLoading, setIsLoading] = useState<'appointments' | 'appointments-scroll'>();
  const [isAppointments, setIsAppointments] = useState<AppointmentsProps[]>([]);
  const [isFilters, setIsFilters] = useState<FilterAppointmentsProps>();
  const [isOffset, setIsOffset] = useState<number>(0);

  const { data, error, loadingSWR } = usePaginationAppointments<ResponseProps<AppointmentsProps[]>>(`${FETCH_APPOINTMENTS}/${user?.id}?offset=${isOffset}&limit=${LIMIT_PER_PAGE_APPOINTMENTS}`, user?.id);

  const handleChangeOffset = useCallback((newOffset: number) => {
    setIsOffset(newOffset);
  }, []);

  const handleFormattedPerDate = useCallback((appointments: AppointmentsProps[]): AppointmentsProps[] => {
    const isNewFormattedPerDate = appointments.sort((appointmentA, appointmentB) => {
      return (new Date(appointmentB.dtHrAgendamento) as any) - (new Date(appointmentA.dtHrAgendamento) as any);
    });

    return isNewFormattedPerDate;
  }, []);

  const handleLoadAppointments = useCallback(async (data?: AppointmentsProps[], error?: any, loadingLoad?: boolean) => {
    if (loadingLoad) {
      setIsLoading(isOffset !== 0 ? 'appointments-scroll' : 'appointments');
    } else {
      setIsLoading(undefined);
    }
    if (data && !loadingLoad) {
      if (data.length > 0) {
        setIsAppointments((current) => {
          const isFormattedPerDate = handleFormattedPerDate([...(current ?? []), ...data]);

          return isFormattedPerDate;
        });
      }
    }
    if (!data && error && !loadingLoad) {
      onToast({
        message: error.message ?? 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [onToast, handleFormattedPerDate, isOffset]);

  const handleChangeFilter = useCallback((filter: FilterAppointmentsProps) => {
    setIsFilters((current) => ({
      ...current,
      ...filter,
    }));
  }, []);

  const filteredItems = useMemo(() => {
    return isAppointments;
  }, [isAppointments]);

  useEffect(() => {
    handleLoadAppointments(data?.obj, error, loadingSWR);
  }, [data, error, loadingSWR, handleLoadAppointments]);

  return (
    <AppointmentsContext.Provider value={{
      appointments: filteredItems, loading: isLoading, filters: isFilters, onChangeFilter: handleChangeFilter, offset: isOffset, onChangeOffset: handleChangeOffset,
    }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
}
