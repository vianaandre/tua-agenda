import React, { useEffect } from 'react';

import { CompanyProps } from 'common/interface/CompanyProps';
import { useCompany } from 'common/hooks/useCompany';
import { ContainerCompany } from './styles';
import { HeaderCompany } from './HeaderCompany';
import { AboutCompany } from './AbourCompany';
import { Professionals } from './Professionals';
import { Services } from './Services';

export const Company: React.FC<CompanyProps> = ({ config, intl, funcionarios }) => {
  const { onUpdateStateConfig, onUpdateStateIntl, onUpdateStateEmployees } = useCompany();

  useEffect(() => {
    onUpdateStateConfig(config);
  }, [config, onUpdateStateConfig]);

  useEffect(() => {
    onUpdateStateIntl(intl);
  }, [intl, onUpdateStateIntl]);

  useEffect(() => {
    onUpdateStateEmployees(funcionarios);
  }, [funcionarios, onUpdateStateEmployees]);

  return (
    <ContainerCompany>
      <HeaderCompany />
      <AboutCompany />
      <Professionals />
      <Services />
    </ContainerCompany>
  );
};
