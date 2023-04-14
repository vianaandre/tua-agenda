import { StatusAppointmentsProps } from './StatusAppointmentsProps';

export type PriceType = 'ceil' | 'floor';

export interface FilterAppointmentsProps {
    search?: string;
    price?: PriceType;
    status?: StatusAppointmentsProps;
    date?: Date;
}
