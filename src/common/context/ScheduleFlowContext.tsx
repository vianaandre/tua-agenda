import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { createContext } from 'use-context-selector';

import { StepperProps } from 'common/interface/StepperProps';
import { stepperScheduleFlow } from 'utils/stepper';
import { EmployeeProps } from 'common/interface/EmployeeProps';
import { useCompany } from 'common/hooks/useCompany';
import { ServicesCompanyProps } from 'common/interface/ServiceCompanyProps';

interface ScheduleFlowContextProps {
    stepper: StepperProps[];
    selectEmployees: EmployeeProps[];
    servicesPerEmployees: ServicesCompanyProps[];
    onSelectStepper: (stepper: StepperProps) => void;
    onSelectEmployees: (employee: EmployeeProps) => void;
}

export const ScheduleFlowContext = createContext({} as ScheduleFlowContextProps);

export function ScheduleFlowProvider({ children }: { children: React.ReactNode }) {
  const {
    employees, services, employeesProducts,
  } = useCompany();

  const [isStepper, setIsStepper] = useState<StepperProps[]>([]);
  const [isSelectEmployees, setIsSelectEmployees] = useState<EmployeeProps[]>([]);

  const handleSelectStepper = useCallback((stepper: StepperProps) => {
    const steppers = stepperScheduleFlow.filter((i) => i.stepper < stepper.stepper);
    setIsStepper(steppers);
  }, []);

  const handleSelectEmployees = useCallback((employee: EmployeeProps) => {
    setIsSelectEmployees((current: EmployeeProps[]) => {
      if (current.find((i) => i.id === employee.id)) {
        return current.filter((i) => i.id !== employee.id);
      }

      return [...current, employee];
    });
  }, []);

  const isServicesPerEmployees = useMemo(() => {
    const isIdsProcuts = employeesProducts?.filter((employeeProduct) => {
      return isSelectEmployees.find((selectEmployee) => employeeProduct.idFuncionario === selectEmployee.id);
    });

    if (isIdsProcuts) {
      const isServices = services?.filter((service) => {
        return isIdsProcuts?.find((isIdProduct) => isIdProduct.idProduto === service.id);
      });
      return isServices ?? [];
    }

    return services ?? [];
  }, [employeesProducts, isSelectEmployees, services]);

  useEffect(() => {
    if (employees && employees.length === 1) {
      handleSelectStepper(stepperScheduleFlow[1]);
      handleSelectEmployees(employees[0]);
    }
  }, [employees, handleSelectStepper, handleSelectEmployees]);

  return (
    <ScheduleFlowContext.Provider value={{
      stepper: isStepper,
      selectEmployees: isSelectEmployees,
      servicesPerEmployees: isServicesPerEmployees,
      onSelectStepper: handleSelectStepper,
      onSelectEmployees: handleSelectEmployees,
    }}
    >
      {children}
    </ScheduleFlowContext.Provider>
  );
}
