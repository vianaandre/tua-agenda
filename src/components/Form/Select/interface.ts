import { InputVariantProps } from 'common/interface/InputVariantProps';
import { OptionSelectProps } from 'common/interface/OptionSelectProps';
import React from 'react';
import { RegisterOptions } from 'react-hook-form';

export interface SelectProps {
    name: string;
    id: string;
    label?: string;
    defaultValue?: string;
    rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    variant?: InputVariantProps;
    icon?: {
        icon: React.ReactNode;
        direction: 'left';
    };
    options: OptionSelectProps<string, string>[];
    widthOption: number;
    left: number;
}
