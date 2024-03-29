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
  const employeesProducts = useContextSelector(CompanyContext, (company) => company.employeesProducts);
  const selectEmployees = useContextSelector(CompanyContext, (company) => company.selectEmployees);
  const servicesPerEmployees = useContextSelector(CompanyContext, (company) => company.servicesPerEmployees);

  const openFlowSchedule = useContextSelector(CompanyContext, (company) => company.openFlowSchedule);
  const onCloseFlowSchedule = useContextSelector(CompanyContext, (company) => company.onCloseFlowSchedule);
  const onOpenFlowSchedule = useContextSelector(CompanyContext, (company) => company.onOpenFlowSchedule);
  const onUpdatedStates = useContextSelector(CompanyContext, (company) => company.onUpdatedStates);
  const onSelectService = useContextSelector(CompanyContext, (company) => company.onSelectService);
  const onSearchServices = useContextSelector(CompanyContext, (company) => company.onSearchServices);
  const onClearSelectServices = useContextSelector(CompanyContext, (company) => company.onClearSelectServices);
  const onSelectEmployees = useContextSelector(CompanyContext, (company) => company.onSelectEmployees);

  return {
    intl,
    config,
    employees,
    products,
    services,
    servicesSelect,
    servicesSearch,
    employeesProducts,
    openFlowSchedule,
    selectEmployees,
    servicesPerEmployees,
    onCloseFlowSchedule,
    onSelectService,
    onOpenFlowSchedule,
    onUpdatedStates,
    onSearchServices,
    onClearSelectServices,
    onSelectEmployees,
  };
};
