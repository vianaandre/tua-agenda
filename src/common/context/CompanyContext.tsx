import React, { useCallback, useEffect, useState } from 'react';
import { createContext } from 'use-context-selector';

import { ConfigProps } from 'common/interface/ConfigProps';
import { IntlProps } from 'common/interface/IntlProps';
import { ProfessionalProps } from 'common/interface/ProfesssionalProps';
import { ProductProps } from 'common/interface/ProductProps';
import { EmployeeProps } from 'common/interface/EmployeeProps';
import { CompanyProps } from 'common/interface/CompanyProps';
import { ServicesCompanyProps } from 'common/interface/ServiceCompanyProps';
import { EmployeeProductProps } from 'common/interface/EmployeeProductProps';

interface CompanyContextProps {
    config?: ConfigProps;
    intl?: IntlProps;
    employees?: ProfessionalProps[];
    products?: ProductProps[];
    services?: ServicesCompanyProps[];
    servicesSelect?: string[];
    servicesSearch?: ServicesCompanyProps[];
    openFlowSchedule: boolean;
    employeesProducts?: EmployeeProductProps[];
    onUpdatedStates: (company: CompanyProps) => void;
    onSelectService: (id: string) => void;
    onSearchServices: (search: string) => void;
    onOpenFlowSchedule: () => void;
    onCloseFlowSchedule: () => void;
    onClearSelectServices: () => void;
}

export const CompanyContext = createContext({} as CompanyContextProps);

export function CompanyProvider({ children }: { children: React.ReactNode }) {
  const [isIntl, setIsIntl] = useState<IntlProps>();
  const [isConfig, setIsConfig] = useState<ConfigProps>();
  const [isEmployees, setIsisEmployees] = useState<EmployeeProps[]>();
  const [isEmployeesProducts, setIsisEmployeesProducts] = useState<EmployeeProductProps[]>();
  const [isProducts, setIsProducts] = useState<ProductProps[]>();
  const [isServices, setIsServices] = useState<ServicesCompanyProps[]>();
  const [isServicesSelect, setIsServicesSelect] = useState<string[]>();
  const [isServicesSearch, setIsServicesSearch] = useState<ServicesCompanyProps[]>();
  const [isOpenFlowSchedule, setIsOpenFlowShcedule] = useState<boolean>(false);

  const handleOpenFlowSchedule = () => setIsOpenFlowShcedule(true);
  const handleCloseFlowSchedule = () => setIsOpenFlowShcedule(false);

  const handleUpdatedStates = useCallback((company: CompanyProps) => {
    setIsIntl(company.intl);
    setIsConfig(company.config);
    setIsisEmployees(company.funcionarios);
    setIsProducts(company.produtos);
    setIsServices(company.servicos);
    setIsisEmployeesProducts(company.funcionarioProduto);
  }, []);

  const handleSelectService = useCallback((id: string) => {
    setIsServicesSelect((current) => {
      if (current?.includes(id)) {
        return current.filter((i) => i !== id);
      }
      if (current) {
        return [...current, id];
      }
      return [id];
    });
  }, []);

  const handleClearSelectServices = useCallback(() => {
    setIsServicesSelect(undefined);
  }, []);

  const handleSearchServices = useCallback((search: string) => {
    if (isServices && search && search !== '') {
      setIsServicesSearch(isServices.filter((item) => item.nome.toLowerCase().includes(search.toLowerCase())));
    } else {
      setIsServicesSearch(undefined);
    }
  }, [isServices]);

  useEffect(() => {
    if (isOpenFlowSchedule) {
      window.document.body.style.overflowY = 'hidden';
    }

    return () => {
      window.document.body.style.overflowY = 'auto';
    };
  }, [isOpenFlowSchedule]);

  return (
    <CompanyContext.Provider value={{
      config: isConfig,
      intl: isIntl,
      employees: isEmployees,
      products: isProducts,
      services: isServices,
      servicesSelect: isServicesSelect,
      servicesSearch: isServicesSearch,
      openFlowSchedule: isOpenFlowSchedule,
      employeesProducts: isEmployeesProducts,
      onUpdatedStates: handleUpdatedStates,
      onSelectService: handleSelectService,
      onSearchServices: handleSearchServices,
      onCloseFlowSchedule: handleCloseFlowSchedule,
      onOpenFlowSchedule: handleOpenFlowSchedule,
      onClearSelectServices: handleClearSelectServices,
    }}
    >
      {children}
    </CompanyContext.Provider>
  );
}
