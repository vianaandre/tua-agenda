import React, { InputHTMLAttributes } from 'react';
import { RegisterOptions } from 'react-hook-form';

import { InputVariantProps } from 'common/interface/InputVariantProps';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    variant?: InputVariantProps;
    name: string;
    id: string;
    type: string;
    rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    icon?: {
        icon: React.ReactNode;
        direction: 'left';
    }
    error?: string;
}
