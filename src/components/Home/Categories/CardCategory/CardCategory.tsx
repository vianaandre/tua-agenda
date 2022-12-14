import React, { useMemo } from 'react';

import {
  Beleza, Cabeleleiro, Cilios, Depilacao, Massagem, Spa, Tatuagem, Unhas,
} from 'common/icons/category';
import { Arrow } from 'common/icons';
import { CategoryProps } from 'common/interface/CategoryProps';
import { theme } from 'common/styles/theme';
import { ContainerCardCategory } from './styles';
import { ICardCategory } from './interface';

export const CardCategory: React.FC<ICardCategory> = ({ category, countProfessionals, title }) => {
  const isIcon = useMemo(() => {
    switch (category) {
      case CategoryProps.BELEZA:
        return <Beleza />;
      case CategoryProps.CABELEIRO:
        return <Cabeleleiro />;
      case CategoryProps.CILIOS:
        return <Cilios />;
      case CategoryProps.DEPILACAO:
        return <Depilacao />;
      case CategoryProps.MASSAGEM:
        return <Massagem />;
      case CategoryProps.SPA:
        return <Spa />;
      case CategoryProps.TATUAGEM:
        return <Tatuagem />;
      case CategoryProps.UNHAS:
        return <Unhas />;
      default:
        return null;
    }
  }, [category]);

  return (
    <ContainerCardCategory>
      <button type="button">
        <div className="icon">
          {isIcon}
        </div>
        <h5 className="title">{title}</h5>
        <div className="count_professionals">
          <p className="great color_light">
            {countProfessionals}
            {' '}
            profissionais
          </p>
          <Arrow width={24} height={24} color={theme.colors.BLACK[500]} />
        </div>
      </button>
    </ContainerCardCategory>
  );
};
