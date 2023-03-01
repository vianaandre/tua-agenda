import React, { useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';

import { ConfigProps } from 'common/interface/ConfigProps';
import { IntlProps } from 'common/interface/IntlProps';
import { ProfessionalProps } from 'common/interface/ProfesssionalProps';

interface CompanyContextProps {
    config?: ConfigProps;
    intl?: IntlProps;
    employees?: ProfessionalProps[];
    onUpdateStateIntl: (intl: IntlProps) => void;
    onUpdateStateConfig: (config: ConfigProps) => void;
    onUpdateStateEmployees: (employees: any[]) => void;
}

export const CompanyContext = createContext({} as CompanyContextProps);

export function CompanyProvider({ children }: { children: React.ReactNode }) {
  const [isIntl, setIsIntl] = useState<IntlProps>();
  const [isConfig, setIsConfig] = useState<ConfigProps>();
  const [isEmployees, setIsisEmployees] = useState<any[]>();

  const handleUpdateStateIntl = useCallback((intl: IntlProps) => {
    setIsIntl(intl);
  }, []);

  const handleUpdateStateConfig = useCallback((config: ConfigProps) => {
    setIsConfig(config);
  }, []);

  const handleUpdateStateEmployees = useCallback((employees: any[]) => {
    setIsisEmployees(employees);
  }, []);

  return (
    <CompanyContext.Provider value={{
      config: isConfig,
      intl: isIntl,
      employees: isEmployees,
      onUpdateStateConfig: handleUpdateStateConfig,
      onUpdateStateIntl: handleUpdateStateIntl,
      onUpdateStateEmployees: handleUpdateStateEmployees,
    }}
    >
      {children}
    </CompanyContext.Provider>
  );
}
