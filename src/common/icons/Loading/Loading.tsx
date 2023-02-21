import React from 'react';

import { IIcon } from 'common/icons/interface';
import { ContainerLoadingButton } from './styles';

export const Loading: React.FC<IIcon> = ({ color, width, height }) => {
  return (
    <ContainerLoadingButton color={color} width={width} height={height}>
      <div className="loader" />
    </ContainerLoadingButton>
  );
};
