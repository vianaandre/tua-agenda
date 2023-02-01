import React, { useEffect } from 'react';

import { ActionAPP } from 'components/Home/ActionAPP';
import { ContainerSearchResult } from './styles';
import { Banner } from './Banner';
import { Result } from './Result';

export const SearchResult: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 300);
  }, []);

  return (
    <ContainerSearchResult id="resultSearch">
      <Banner />
      <Result />
      <ActionAPP />
    </ContainerSearchResult>
  );
};
