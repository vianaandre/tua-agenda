import { RegisterOptions } from 'react-hook-form';
import { ReactCodeInputProps } from 'react-code-input';

export interface InputCodeProps extends ReactCodeInputProps {
    label?: string;
    name: string;
    rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    icon?: {
        icon: React.ReactNode;
        direction: 'left';
    }
    error?: string;
}
