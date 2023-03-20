import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { createContext } from 'use-context-selector';

import { StepperProps } from 'common/interface/StepperProps';
import { stepperScheduleFlow } from 'utils/stepper';
import { EmployeeProps } from 'common/interface/EmployeeProps';
import { useCompany } from 'common/hooks/useCompany';
import { ServicesCompanyProps } from 'common/interface/ServiceCompanyProps';
import { useToast } from 'common/hooks/useToast';
import { listHoursSchedule, saveWaitingList } from 'services/modules/company ';
import { useAuth } from 'common/hooks/useAuth';
import { ScheduleHoursProps } from 'common/interface/ScheduleHoursProps';
import { format } from 'date-fns';
import { HourProps } from 'common/interface/HourProps';
import { FormWaitingListProps } from 'common/interface/FormWaitingListProps';

interface ScheduleFlowContextProps {
    stepper: StepperProps[];
    selectEmployees: EmployeeProps[];
    servicesPerEmployees: ServicesCompanyProps[];
    dateAvailable: string[];
    dateSelect?: Date;
    hoursAvailablePerDate: HourProps[];
    hourSelect?: HourProps;
    loadingHours: boolean;
    fieldsDate: string[];
    onSelectDate: (date: Date) => void;
    onSelectStepper: (stepper: StepperProps) => void;
    onSelectEmployees: (employee: EmployeeProps) => void;
    onSelectHour: (hourSelect: HourProps, date: string) => void;
    onAddFieldDateInWaitingList: () => void;
    onRemovedFieldDateInWaitingList: (index: number) => void;
    onSubmitSaveWaitingList: (waitingListData: FormWaitingListProps) => void;
}

export const ScheduleFlowContext = createContext({} as ScheduleFlowContextProps);

export function ScheduleFlowProvider({ children }: { children: React.ReactNode }) {
  const {
    employees, services, employeesProducts, config,
  } = useCompany();
  const { onToast } = useToast();
  const { user } = useAuth();

  const [isStepper, setIsStepper] = useState<StepperProps[]>([]);
  const [isSelectEmployees, setIsSelectEmployees] = useState<EmployeeProps[]>([]);
  const [isScheduleHours, setIsScheduleHours] = useState<ScheduleHoursProps[]>();
  const [isDateSelect, setIsDateSelect] = useState<Date>();
  const [isHourSelect, setIsHourSelect] = useState<HourProps>();
  const [isLoadingHours, setIsLoadingHours] = useState<boolean>(true);
  const [isFieldsDate, setIsFieldsDate] = useState([
    'date',
  ]);

  const handleAddFieldDateInWaitingList = useCallback(() => {
    setIsFieldsDate((current) => [...current, 'date']);
  }, []);

  const handleRemovedFieldDateInWaitingList = useCallback((index: number) => {
    setIsFieldsDate((current) => current.filter((curr, i) => i !== index));
  }, []);

  const handleSubmitSaveWaitingList = useCallback(async (waitingListData: FormWaitingListProps) => {
    try {
      if (config && config.id) {
        await saveWaitingList(waitingListData, config.id, 'asasa');
      }
    } catch (err: any) {
      onToast({
        message: err ?? 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [onToast, config]);

  const handleSelectDate = useCallback((date: Date) => {
    setIsDateSelect(date);
    setIsHourSelect(undefined);
  }, []);

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

  const handleLoadHoursPerEmployee = useCallback(async () => {
    try {
      if (user && config && services && services.length > 0 && isSelectEmployees.length > 0) {
        setIsLoadingHours(true);
        const isMinutes = services?.reduce((curr, prev) => {
          return curr + prev.minutos;
        }, 0);
        const result = await listHoursSchedule(user, config.id, isSelectEmployees[0].id, isMinutes);

        setIsScheduleHours(result);
        setIsLoadingHours(false);
      }
    } catch (err: any) {
      setIsLoadingHours(false);
      onToast({
        message: err ?? 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [onToast, config, user, isSelectEmployees, services]);

  const handleSelectHour = useCallback((hourSelect: HourProps, date: string) => {
    setIsHourSelect((current) => {
      if (current?.date === date && current.hora === hourSelect.hora) {
        return undefined;
      }

      return {
        ...hourSelect,
        date,
      };
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

  const isDateAvailable = useMemo(() => {
    if (isScheduleHours) {
      return isScheduleHours.map((scheduleHour) => scheduleHour.data);
    }

    return [];
  }, [isScheduleHours]);

  const isHoursAvailablePerDate = useMemo((): HourProps[] => {
    if (isDateSelect && isScheduleHours) {
      const isHours = isScheduleHours.find((scheduleHour) => scheduleHour.data === format(isDateSelect, 'yyyy/MM/dd'))?.horarios;

      return isHours ?? [];
    }

    return [];
  }, [isDateSelect, isScheduleHours]);

  useEffect(() => {
    if (employees && employees.length === 1) {
      handleSelectStepper(stepperScheduleFlow[1]);
      handleSelectEmployees(employees[0]);
    }
  }, [employees, handleSelectStepper, handleSelectEmployees]);

  useEffect(() => {
    if (isStepper.length >= 2) {
      handleLoadHoursPerEmployee();
    }
  }, [handleLoadHoursPerEmployee, isStepper]);

  return (
    <ScheduleFlowContext.Provider value={{
      stepper: isStepper,
      selectEmployees: isSelectEmployees,
      servicesPerEmployees: isServicesPerEmployees,
      dateAvailable: isDateAvailable,
      dateSelect: isDateSelect,
      hoursAvailablePerDate: isHoursAvailablePerDate,
      hourSelect: isHourSelect,
      loadingHours: isLoadingHours,
      fieldsDate: isFieldsDate,
      onSelectDate: handleSelectDate,
      onSelectStepper: handleSelectStepper,
      onSelectEmployees: handleSelectEmployees,
      onSelectHour: handleSelectHour,
      onAddFieldDateInWaitingList: handleAddFieldDateInWaitingList,
      onRemovedFieldDateInWaitingList: handleRemovedFieldDateInWaitingList,
      onSubmitSaveWaitingList: handleSubmitSaveWaitingList,
    }}
    >
      {children}
    </ScheduleFlowContext.Provider>
  );
}
