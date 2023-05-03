import { useCallback, useState } from 'react';

import { useAppointments } from 'common/hooks/useAppointments';
import { StatusAppointmentsProps } from 'common/interface/StatusAppointmentsProps';
import { PriceType } from 'common/interface/FilterAppointmentsProps';
import { UseFilterType } from './types';

export function useFilter(): UseFilterType {
  const { filters, onChangeFilter } = useAppointments();

  const [isOpenFilterStatus, setIsOpenFilterStatus] = useState<boolean>(false);
  const [isDateFilter, setIsDateFilter] = useState<Date | undefined>(filters?.date);

  const handleOpenFilterStatus = (openFilterStatus: boolean) => setIsOpenFilterStatus(openFilterStatus);

  const handleSelectFilterStatus = useCallback((status: StatusAppointmentsProps) => {
    onChangeFilter({
      ...filters,
      status,
    });
    handleOpenFilterStatus(false);
  }, [filters, onChangeFilter]);

  const handleSelectFilterPrice = useCallback((price: PriceType) => {
    onChangeFilter({
      ...filters,
      price,
    });
  }, [filters, onChangeFilter]);

  const handleSelectDateFilter = useCallback((date: Date, confirmFilter: boolean) => {
    setIsDateFilter(date);
    if (confirmFilter) {
      onChangeFilter({
        ...filters,
        date,
      });
    }
  }, [filters, onChangeFilter]);

  const handleChangeFilterSearch = useCallback((search: string) => {
    onChangeFilter({
      ...filters,
      search,
    });
  }, [filters, onChangeFilter]);

  return {
    openFilterStatus: isOpenFilterStatus,
    filters,
    dateFilter: isDateFilter,
    onSelectDateFilter: handleSelectDateFilter,
    onSelectFilterStatus: handleSelectFilterStatus,
    onOpenFilterStatus: handleOpenFilterStatus,
    onSelectFilterPrice: handleSelectFilterPrice,
    onChangeFilterSearch: handleChangeFilterSearch,
  };
}
