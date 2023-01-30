import React from 'react';

import { ContainerSearchResult } from './styles';
import { Banner } from './Banner';
import { Result } from './Result';

export const SearchResult: React.FC = () => {
  return (
    <ContainerSearchResult>
      <Banner />
      <Result />
    </ContainerSearchResult>
  );
};
