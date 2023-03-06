import React, { useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';

import { ConfigProps } from 'common/interface/ConfigProps';
import { IntlProps } from 'common/interface/IntlProps';
import { ProfessionalProps } from 'common/interface/ProfesssionalProps';
import { ProductProps } from 'common/interface/ProductProps';
import { EmployeeProps } from 'common/interface/EmployeeProps';
import { CompanyProps } from 'common/interface/CompanyProps';
import { ServicesCompanyProps } from 'common/interface/ServiceCompanyProps';

interface CompanyContextProps {
    config?: ConfigProps;
    intl?: IntlProps;
    employees?: ProfessionalProps[];
    products?: ProductProps[];
    services?: ServicesCompanyProps[];
    servicesSelect?: string[];
    servicesSearch?: ServicesCompanyProps[];
    onUpdatedStates: (company: CompanyProps) => void;
    onSelectService: (id: string) => void;
    onSearchServices: (search: string) => void;
}

export const CompanyContext = createContext({} as CompanyContextProps);

export function CompanyProvider({ children }: { children: React.ReactNode }) {
  const [isIntl, setIsIntl] = useState<IntlProps>();
  const [isConfig, setIsConfig] = useState<ConfigProps>();
  const [isEmployees, setIsisEmployees] = useState<EmployeeProps[]>();
  const [isProducts, setIsProducts] = useState<ProductProps[]>();
  const [isServices, setIsServices] = useState<ServicesCompanyProps[]>();
  const [isServicesSelect, setIsServicesSelect] = useState<string[]>();
  const [isServicesSearch, setIsServicesSearch] = useState<ServicesCompanyProps[]>();

  const handleUpdatedStates = useCallback((company: CompanyProps) => {
    setIsIntl(company.intl);
    setIsConfig(company.config);
    setIsisEmployees(company.funcionarios);
    setIsProducts(company.produtos);
    setIsServices(company.servicos);
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

  const handleSearchServices = useCallback((search: string) => {
    if (isServices && search && search !== '') {
      setIsServicesSearch(isServices.filter((item) => item.nome.includes(search)));
    } else {
      setIsServicesSearch(undefined);
    }
  }, [isServices]);

  return (
    <CompanyContext.Provider value={{
      config: isConfig,
      intl: isIntl,
      employees: isEmployees,
      products: isProducts,
      services: isServices,
      servicesSelect: isServicesSelect,
      servicesSearch: isServicesSearch,
      onUpdatedStates: handleUpdatedStates,
      onSelectService: handleSelectService,
      onSearchServices: handleSearchServices,
    }}
    >
      {children}
    </CompanyContext.Provider>
  );
}
