import React from 'react';
import { ContainerIconButton } from './styles';
import { IconButtonProps } from './interface';

export const IconButton: React.FC<IconButtonProps> = ({ children, onClick }) => {
  return (
    <ContainerIconButton type="button" onClick={onClick}>
      {children}
    </ContainerIconButton>
  );
};
