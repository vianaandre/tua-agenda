import { useAppointments } from 'common/hooks/useAppointments';
import { StatusAppointmentsProps } from 'common/interface/StatusAppointmentsProps';
import { useCallback, useEffect, useMemo } from 'react';
import { PriceType } from 'common/interface/FilterAppointmentsProps';
import { AppointmentsProps } from 'common/interface/AppointmentsProps';
import { UseTableAppointments } from './types';

export function useTableAppointments(): UseTableAppointments {
  const {
    appointments, onChangeOffset, loading, filters, appointmentsForFilters,
  } = useAppointments();

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

  const handleComparePrice = useCallback((priceA: number, priceB: number, price: PriceType) => {
    if (price === 'floor') return priceA - priceB;
    if (price === 'ceil') return priceB - priceA;

    return priceA - priceB;
  }, []);

  const filteredItems = useMemo(() => {
    if (filters && filters.status) {
      return appointmentsForFilters.filter((appointmentForFilters) => appointmentForFilters.situacao === filters.status);
    }

    if (filters && filters.price) {
      return appointmentsForFilters.sort((priceA, priceB) => handleComparePrice(priceA.total, priceB.total, filters.price as PriceType));
    }

    if (filters && filters.search && filters.search !== '') {
      const appointmentsForFiltersSearch = [] as AppointmentsProps[];
      appointmentsForFilters.forEach((appointmentForFilters) => {
        appointmentForFilters.itens.forEach((item) => {
          if (filters.search && item.nome.toLowerCase().includes(filters.search.toLowerCase())) {
            appointmentsForFiltersSearch.push(appointmentForFilters);
          }
        });
      });

      return appointmentsForFiltersSearch;
    }

    return appointments;
  }, [appointments, filters, handleComparePrice, appointmentsForFilters]);

  useEffect(() => {
    if (!filters?.date && !filters?.price && !filters?.search && !filters?.status) {
      window.addEventListener('scroll', () => {
        if (window.innerHeight + document.documentElement.scrollTop === (window.document.scrollingElement as { scrollHeight: number }).scrollHeight) {
          handleScrollWindow();
        }
      });
    } else {
      window.removeEventListener('scroll', () => true, true);
    }
  }, [handleScrollWindow, filters]);

  return {
    getStatus,
    appointments: filteredItems,
    loading,
  };
}
