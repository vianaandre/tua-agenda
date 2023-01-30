import React from 'react';

import { ArrowAlternative } from 'common/icons';
import { theme } from 'common/styles/theme';
import { ContainerCardCity } from './styles';
import { ICardCity } from './interface';

export const CardCity: React.FC<ICardCity> = ({ city }) => {
  return (
    <ContainerCardCity>
      <button type="button">
        {city}
        <ArrowAlternative width={24} height={24} color={theme.colors.BLACK[1000]} />
      </button>
    </ContainerCardCity>
  );
};
