import { Close } from 'common/icons';
import { Container } from 'common/styles/container';
import { theme } from 'common/styles/theme';
import { format } from 'date-fns';
import React from 'react';

import { ContainerSelectedFilters } from './styles';
import { SelectedFiltersType } from './types';
import { useSelectedFilters } from './useSelectedFilter';

export const SelectedFilters: React.FC<SelectedFiltersType> = ({ filters }) => {
  const { filters: filtersMemo, onRemoveFilter } = useSelectedFilters(filters);

  return (
    <Container>
      <ContainerSelectedFilters>
        {filtersMemo.map((filter) => {
          if (filter[0] === 'price') {
            return (
              <div key={filter[0]}>
                <p className="small color_white">{filter[1] === 'ceil' ? 'Preço mais alto' : 'Preço mais baixo'}</p>
                <button type="button" onClick={() => onRemoveFilter(filter[0])}>
                  <Close width={14} height={14} color={theme.colors.WHITE} />
                </button>
              </div>
            );
          }
          if (filter[0] === 'date') {
            return (
              <div key={filter[0]}>
                <p className="small color_white">{format(new Date(filter[1]), 'dd/MM/yyyy')}</p>
                <button type="button" onClick={() => onRemoveFilter(filter[0])}>
                  <Close width={14} height={14} color={theme.colors.WHITE} />
                </button>
              </div>
            );
          }
          return (
            <div key={filter[0]}>
              <p className="small color_white">{filter[1]}</p>
              <button type="button" onClick={() => onRemoveFilter(filter[0])}>
                <Close width={14} height={14} color={theme.colors.WHITE} />
              </button>
            </div>
          );
        })}
      </ContainerSelectedFilters>
    </Container>
  );
};
