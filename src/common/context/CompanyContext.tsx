import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { createContext } from 'use-context-selector';
import { useRouter } from 'next/router';

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
    selectEmployees: EmployeeProps[];
    servicesPerEmployees: ServicesCompanyProps[];
    onUpdatedStates: (company: CompanyProps) => void;
    onSelectService: (id: string, ids?: string[]) => void;
    onSearchServices: (search: string) => void;
    onOpenFlowSchedule: () => void;
    onCloseFlowSchedule: () => void;
    onClearSelectServices: () => void;
    onSelectEmployees: (employee: EmployeeProps) => void;
}

export const CompanyContext = createContext({} as CompanyContextProps);

export function CompanyProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [isIntl, setIsIntl] = useState<IntlProps>();
  const [isConfig, setIsConfig] = useState<ConfigProps>();
  const [isEmployees, setIsisEmployees] = useState<EmployeeProps[]>();
  const [isEmployeesProducts, setIsisEmployeesProducts] = useState<EmployeeProductProps[]>();
  const [isProducts, setIsProducts] = useState<ProductProps[]>();
  const [isServices, setIsServices] = useState<ServicesCompanyProps[]>();
  const [isServicesSelect, setIsServicesSelect] = useState<string[]>();
  const [isServicesSearch, setIsServicesSearch] = useState<ServicesCompanyProps[]>();
  const [isOpenFlowSchedule, setIsOpenFlowShcedule] = useState<boolean>(false);
  const [isSelectEmployees, setIsSelectEmployees] = useState<EmployeeProps[]>([]);

  const handleSelectEmployees = useCallback((employee: EmployeeProps) => {
    setIsSelectEmployees((current: EmployeeProps[]) => {
      if (current.find((i) => i.id === employee.id)) {
        return current.filter((i) => i.id !== employee.id);
      }

      return [...current, employee];
    });
  }, []);

  const handleOpenFlowSchedule = () => setIsOpenFlowShcedule(true);

  const handleCloseFlowSchedule = () => {
    setIsOpenFlowShcedule(false);
    setIsServicesSelect([]);
  };

  const handleUpdatedStates = useCallback((company: CompanyProps) => {
    setIsIntl(company.intl);
    setIsConfig(company.config);
    setIsisEmployees(company.funcionarios);
    setIsProducts(company.produtos);
    setIsServices(company.servicos);
    setIsisEmployeesProducts(company.funcionarioProduto);
  }, []);

  const handleSelectService = useCallback((id: string, ids?: string[]) => {
    if (ids) {
      setIsServicesSelect(ids);
    } else {
      setIsServicesSelect((current) => {
        if (current?.includes(id)) {
          return current.filter((i) => i !== id);
        }
        if (current) {
          return [...current, id];
        }
        return [id];
      });
    }
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

  const isServicesPerEmployees = useMemo(() => {
    const isIdsProcuts = isEmployeesProducts?.filter((employeeProduct) => {
      return isSelectEmployees.find((selectEmployee) => employeeProduct.idFuncionario === selectEmployee.id);
    });

    if (isIdsProcuts) {
      const isServicesFilter = isServices?.filter((service) => {
        return isIdsProcuts?.find((isIdProduct) => isIdProduct.idProduto === service.id);
      });
      return isServicesFilter ?? [];
    }

    return isServices ?? [];
  }, [isEmployeesProducts, isSelectEmployees, isServices]);

  useEffect(() => {
    if (isOpenFlowSchedule) {
      window.document.body.style.overflowY = 'hidden';
    }

    return () => {
      window.document.body.style.overflowY = 'auto';
    };
  }, [isOpenFlowSchedule]);

  useEffect(() => {
    if (router.asPath.includes('#flowSchedule')) {
      setIsOpenFlowShcedule(true);
    } else {
      setIsOpenFlowShcedule(false);
      setIsServicesSelect([]);
    }
  }, [router]);

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
      selectEmployees: isSelectEmployees,
      servicesPerEmployees: isServicesPerEmployees,
      onUpdatedStates: handleUpdatedStates,
      onSelectService: handleSelectService,
      onSearchServices: handleSearchServices,
      onCloseFlowSchedule: handleCloseFlowSchedule,
      onOpenFlowSchedule: handleOpenFlowSchedule,
      onClearSelectServices: handleClearSelectServices,
      onSelectEmployees: handleSelectEmployees,
    }}
    >
      {children}
    </CompanyContext.Provider>
  );
}
