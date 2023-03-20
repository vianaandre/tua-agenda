import { HourProps } from 'common/interface/HourProps';

export interface SelectHourProps {
    hour: HourProps;
    active: boolean;
    onSelect: () => void;
}
