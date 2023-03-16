import { ServicesCompanyProps } from 'common/interface/ServiceCompanyProps';

export interface CardServiceProps {
    service: ServicesCompanyProps;
    onSelect: () => void;
    active: boolean;
}
