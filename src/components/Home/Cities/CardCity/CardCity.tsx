import React from 'react';

import { ArrowAlternative } from 'common/icons';
import { theme } from 'common/styles/theme';
import { ContainerCardCity } from './styles';
import { ICardCity } from './interface';

export const CardCity: React.FC<ICardCity> = ({ city, count }) => {
  return (
    <ContainerCardCity>
      <button type="button">
        <div className="info">
          <p>{city}</p>
          <div className="badge">{count}</div>
        </div>
        <ArrowAlternative width={24} height={24} color={theme.colors.BLACK[1000]} />
      </button>
    </ContainerCardCity>
  );
};
