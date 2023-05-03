import { FilterAppointmentsProps, PriceType } from 'common/interface/FilterAppointmentsProps';
import { StatusAppointmentsProps } from 'common/interface/StatusAppointmentsProps';

export type UseFilterType = {
    openFilterStatus: boolean;
    filters?: FilterAppointmentsProps;
    dateFilter?: Date;
    onOpenFilterStatus: (openFilterStatus: boolean) => void;
    onSelectFilterStatus: (status: StatusAppointmentsProps) => void;
    onSelectFilterPrice: (price: PriceType) => void;
    onSelectDateFilter: (date: Date, confirmFilter: boolean) => void;
    onChangeFilterSearch: (search: string) => void;
}
