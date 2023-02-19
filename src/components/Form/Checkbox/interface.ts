import { RegisterOptions } from 'react-hook-form';
import * as Checkbox from '@radix-ui/react-checkbox';

export interface CheckboxProps extends Checkbox.CheckboxIndicatorProps {
    label: string;
    name: string;
    id: string;
    rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    icon?: {
        icon: React.ReactNode;
        direction: 'left';
    }
    error?: string;
}
