import { useContextSelector } from 'use-context-selector';

import { CompanyContext } from 'common/context/CompanyContext';

export const useCompany = () => {
  const intl = useContextSelector(CompanyContext, (company) => company.intl);
  const config = useContextSelector(CompanyContext, (company) => company.config);
  const employees = useContextSelector(CompanyContext, (company) => company.employees);
  const onUpdateStateConfig = useContextSelector(CompanyContext, (company) => company.onUpdateStateConfig);
  const onUpdateStateIntl = useContextSelector(CompanyContext, (company) => company.onUpdateStateIntl);
  const onUpdateStateEmployees = useContextSelector(CompanyContext, (company) => company.onUpdateStateEmployees);

  return {
    intl,
    config,
    employees,
    onUpdateStateConfig,
    onUpdateStateIntl,
    onUpdateStateEmployees,
  };
};
