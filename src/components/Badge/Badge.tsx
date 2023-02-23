import React from 'react';

import { ContainerBadge } from './styles';
import { BadgeProps } from './interface';

export const Badge: React.FC<BadgeProps> = ({ text, variant }) => {
  return (
    <ContainerBadge variant={variant}>
      <span>{text}</span>
    </ContainerBadge>
  );
};
