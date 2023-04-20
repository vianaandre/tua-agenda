import { useCallback, useMemo } from 'react';

import { FilterAppointmentsProps } from 'common/interface/FilterAppointmentsProps';
import { useAppointments } from 'common/hooks/useAppointments';
import { UseSelectedFilters } from './types';

export function useSelectedFilters(filters: FilterAppointmentsProps): UseSelectedFilters {
  const { onChangeFilter } = useAppointments();

  const isFilters = useMemo(() => {
    return Object.entries(filters).filter((filter) => Boolean(filter[1]));
  }, [filters]);

  const handleRemoveFilter = useCallback((keyFilter: string) => {
    onChangeFilter({
      ...filters,
      [keyFilter]: undefined,
    });
  }, [onChangeFilter, filters]);

  return {
    filters: isFilters,
    onRemoveFilter: handleRemoveFilter,
  };
}
