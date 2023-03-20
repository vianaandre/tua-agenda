import { RegisterOptions } from 'react-hook-form';
import * as Switch from '@radix-ui/react-switch';

export interface RadioProps extends Switch.SwitchProps {
    label?: {
        direction: 'left' | 'right';
        text: string;
    };
    name: string;
    id: string;
    rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    icon?: {
        icon: React.ReactNode;
        direction: 'left';
    }
    error?: string;
}
