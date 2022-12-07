import React from 'react';

import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { ContainerButton } from '../styles';
import { INormal } from './interface';

export const Normal: React.FC<INormal> = ({
  text, variant = ButtonVariantProps.PRIMARY, icon, type, ...rest
}) => {
  return (
    <ContainerButton variant={variant} type={type} {...rest}>
      {icon && icon.direction === 'left' && (
        icon.icon
      )}
      {text}
      {icon && icon.direction === 'right' && (
        icon.icon
      )}
    </ContainerButton>
  );
};
