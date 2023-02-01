import React from 'react';

import { ArrowAlternative } from 'common/icons';
import { theme } from 'common/styles/theme';
import { useCities } from 'common/hooks/useCities';
import { ContainerCardCity } from './styles';
import { ICardCity } from './interface';

export const CardCity: React.FC<ICardCity> = ({ city }) => {
  const { onLoadServicesPerCity } = useCities();

  return (
    <ContainerCardCity>
      <button type="button" onClick={() => onLoadServicesPerCity(city)}>
        {city}
        <ArrowAlternative width={24} height={24} color={theme.colors.BLACK[1000]} />
      </button>
    </ContainerCardCity>
  );
};
