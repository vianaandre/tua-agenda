import React from 'react';

import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { LinkProps } from 'next/link';

export interface ILink extends LinkProps {
    variant?: ButtonVariantProps;
    text?: string;
    icon?: {
        direction: 'left' | 'right';
        icon: React.ReactNode;
    };
    href: string;
}
