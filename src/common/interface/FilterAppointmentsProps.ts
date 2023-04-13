import { StatusAppointmentsProps } from './StatusAppointmentsProps';

export interface FilterAppointmentsProps {
    search?: string;
    price?: 'ceil' | 'floor';
    status?: StatusAppointmentsProps;
    date?: Date;
}
