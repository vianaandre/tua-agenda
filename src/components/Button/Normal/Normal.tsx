import React from 'react';

import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { LoadingButton } from 'components/LoadingButton';
import { theme } from 'common/styles/theme';
import { ContainerButton } from '../styles';
import { INormal } from './interface';

export const Normal: React.FC<INormal> = ({
  text, variant = ButtonVariantProps.PRIMARY, icon, type, loading, ...rest
}) => {
  return (
    <ContainerButton variant={variant} type={type} {...rest}>
      {loading && (
        <LoadingButton bgColor={theme.colors.PRIMARY[350]} />
      )}
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
