import { FilterAppointmentsProps } from 'common/interface/FilterAppointmentsProps';

export type UseSelectedFilters = {
    filters: Array<string[]>;
    onRemoveFilter: (keyFilter: string) => void;
}

export type SelectedFiltersType = {
    filters: FilterAppointmentsProps;
}
