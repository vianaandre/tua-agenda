import React, { useEffect } from 'react';

import { CompanyProps } from 'common/interface/CompanyProps';
import { useCompany } from 'common/hooks/useCompany';
import { ContainerCompany } from './styles';
import { HeaderCompany } from './HeaderCompany';
import { AboutCompany } from './AbourCompany';
import { Professionals } from './Professionals';
import { Services } from './Services';

export const Company: React.FC<CompanyProps> = (company) => {
  const { onUpdatedStates } = useCompany();

  useEffect(() => {
    onUpdatedStates(company);
  }, [company, onUpdatedStates]);

  return (
    <ContainerCompany>
      <HeaderCompany />
      <AboutCompany />
      <Professionals />
      <Services />
    </ContainerCompany>
  );
};
