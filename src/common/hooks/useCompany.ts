import { useContextSelector } from 'use-context-selector';

import { CompanyContext } from 'common/context/CompanyContext';

export const useCompany = () => {
  const intl = useContextSelector(CompanyContext, (company) => company.intl);
  const config = useContextSelector(CompanyContext, (company) => company.config);
  const employees = useContextSelector(CompanyContext, (company) => company.employees);
  const products = useContextSelector(CompanyContext, (company) => company.products);
  const services = useContextSelector(CompanyContext, (company) => company.services);
  const servicesSelect = useContextSelector(CompanyContext, (company) => company.servicesSelect);
  const servicesSearch = useContextSelector(CompanyContext, (company) => company.servicesSearch);
  const onUpdatedStates = useContextSelector(CompanyContext, (company) => company.onUpdatedStates);
  const onSelectService = useContextSelector(CompanyContext, (company) => company.onSelectService);
  const onSearchServices = useContextSelector(CompanyContext, (company) => company.onSearchServices);

  return {
    intl,
    config,
    employees,
    products,
    services,
    servicesSelect,
    servicesSearch,
    onSelectService,
    onUpdatedStates,
    onSearchServices,
  };
};
