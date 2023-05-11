import {
  useCallback, useEffect, useState,
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
    appointmentsForFilters: AppointmentsProps[];
    loading?: 'appointments' | 'appointments-scroll';
    filters?: FilterAppointmentsProps;
    offset: number;
    hasMore: boolean;
    onChangeFilter: (filter: FilterAppointmentsProps) => void;
    onChangeOffset: (newOffset: number) => void;
}

export const AppointmentsContext = createContext({} as AppointmentsContextProps);

export function AppointmentsProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const { onToast } = useToast();

  const [isLoading, setIsLoading] = useState<'appointments' | 'appointments-scroll'>();
  const [isAppointments, setIsAppointments] = useState<AppointmentsProps[]>([]);
  const [isAppointmentsForFilters, setIsAppointmentsForFilters] = useState<AppointmentsProps[]>([]);
  const [isFilters, setIsFilters] = useState<FilterAppointmentsProps>();
  const [isOffset, setIsOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const { data, error, loadingSWR } = usePaginationAppointments<ResponseProps<AppointmentsProps[]>>(`${FETCH_APPOINTMENTS}/${user?.id}?offset=${isOffset}&limit=${LIMIT_PER_PAGE_APPOINTMENTS}`, user?.id);

  const handleChangeOffset = useCallback((newOffset: number) => {
    setIsOffset(newOffset);
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
          const dataFilterRepeat = data.filter((d) => !current.find((c) => c.idAgenda === d.idAgenda));
          return [...(current ?? []), ...dataFilterRepeat];
        });
        setIsAppointmentsForFilters((current) => {
          const dataFilterRepeat = data.filter((d) => !current.find((c) => c.idAgenda === d.idAgenda));
          return [...(current ?? []), ...dataFilterRepeat];
        });
        if (data.length < 5) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    }
    if (!data && error && !loadingLoad) {
      onToast({
        message: error.message ?? 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [onToast, isOffset]);

  const handleChangeFilter = useCallback((filter: FilterAppointmentsProps) => {
    setIsFilters((current) => ({
      ...current,
      ...filter,
    }));
  }, []);

  useEffect(() => {
    handleLoadAppointments(data?.obj, error, loadingSWR);
  }, [data, error, loadingSWR, handleLoadAppointments]);

  return (
    <AppointmentsContext.Provider value={{
      appointments: isAppointments, loading: isLoading, filters: isFilters, appointmentsForFilters: isAppointmentsForFilters, hasMore, onChangeFilter: handleChangeFilter, offset: isOffset, onChangeOffset: handleChangeOffset,
    }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
}
