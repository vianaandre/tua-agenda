import React from 'react';

import { ContainerLoadingButton } from './styles';
import { LoadingButtonProps } from './interface';

export const LoadingButton: React.FC<LoadingButtonProps> = ({ bgColor }) => {
  return (
    <ContainerLoadingButton bgColor={bgColor}>
      <div className="bg" />
      <div className="loader" />
    </ContainerLoadingButton>
  );
};
