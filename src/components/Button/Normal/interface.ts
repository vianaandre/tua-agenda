import React from 'react';
import { LinkProps } from 'next/link';

import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';

export interface INormal extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariantProps;
    text?: string;
    icon?: {
        direction: 'left' | 'right';
        icon: React.ReactNode;
    };
    type: 'submit' | 'button';
    isLink?: LinkProps;
    loading?: boolean;
}
