import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { createContext } from 'use-context-selector';
import { useRouter } from 'next/router';

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
import { FormWaitingListProps } from 'common/interface/WaitingListProps';
import { createSchedule } from 'services/modules/schedule';
import { captchatoken } from 'common/mock/captchatoken';

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
    loadingSubmitWaitingList: boolean;
    amoutValueServicesSelect: number;
    servicesSelected: ServicesCompanyProps[];
    loading: boolean;
    onSelectDate: (date: Date) => void;
    onSelectStepper: (stepper: StepperProps) => void;
    onSelectEmployees: (employee: EmployeeProps) => void;
    onSelectHour: (hourSelect: HourProps, date: string) => void;
    onAddFieldDateInWaitingList: () => void;
    onRemovedFieldDateInWaitingList: (index: number) => void;
    onSubmitSaveWaitingList: (waitingListData: FormWaitingListProps, callback: () => void) => void;
    onLoadHoursPerEmployee: () => Promise<void>;
    onSubmitCreateSchedule: (observation?: string) => void;
}

export const ScheduleFlowContext = createContext({} as ScheduleFlowContextProps);

export function ScheduleFlowProvider({ children }: { children: React.ReactNode }) {
  const {
    employees, services, employeesProducts, config, servicesSelect, onCloseFlowSchedule, onClearSelectServices, openFlowSchedule,
  } = useCompany();
  const { onToast } = useToast();
  const { user } = useAuth();
  const { push } = useRouter();

  const [isStepper, setIsStepper] = useState<StepperProps[]>([]);
  const [isSelectEmployees, setIsSelectEmployees] = useState<EmployeeProps[]>([]);
  const [isScheduleHours, setIsScheduleHours] = useState<ScheduleHoursProps[]>();
  const [isDateSelect, setIsDateSelect] = useState<Date>();
  const [isHourSelect, setIsHourSelect] = useState<HourProps>();
  const [isLoadingHours, setIsLoadingHours] = useState<boolean>(true);
  const [isFieldsDate, setIsFieldsDate] = useState([
    'date',
  ]);
  const [isLoadingSubmitWaitingList, setIsLoadingWaitingList] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAddFieldDateInWaitingList = useCallback(() => {
    setIsFieldsDate((current) => [...current, 'date']);
  }, []);

  const handleRemovedFieldDateInWaitingList = useCallback((index: number) => {
    setIsFieldsDate((current) => current.filter((curr, i) => i !== index));
  }, []);

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
      if (config && services && services.length > 0 && isSelectEmployees.length > 0) {
        setIsLoadingHours(true);
        const isMinutes = services?.reduce((curr, prev) => {
          return curr + prev.minutos;
        }, 0);
        const result = await listHoursSchedule(config.id, isSelectEmployees[0].id, isMinutes, user);

        setIsScheduleHours(result);
        setIsLoadingHours(false);
      }
      setIsLoadingHours(false);
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

  const handleSubmitSaveWaitingList = useCallback(async (waitingListData: FormWaitingListProps, callback: () => void) => {
    try {
      if (config && config.id && servicesSelect) {
        setIsLoadingWaitingList(true);
        await saveWaitingList(waitingListData, config.id, servicesSelect, waitingListData.user, 'asasa', isSelectEmployees[0].id, user?.id);
        callback();
        onCloseFlowSchedule();
        onToast({
          message: 'Registrado com sucesso na lista de espera.',
          type: 'success',
        });
        onClearSelectServices();
        setTimeout(() => {
          if (employees && employees.length === 1) {
            handleSelectStepper(stepperScheduleFlow[1]);
          } else {
            handleSelectStepper(stepperScheduleFlow[0]);
          }
        }, 600);
      }

      setIsLoadingWaitingList(false);
    } catch (err: any) {
      setIsLoadingWaitingList(false);
      onToast({
        message: err.message ?? 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [onToast, config, isSelectEmployees, servicesSelect, user, onCloseFlowSchedule, onClearSelectServices, employees, handleSelectStepper]);

  const handleSubmitCreateSchedule = useCallback(async (observation?: string) => {
    try {
      setIsLoading(true);
      if (user && servicesSelect && isSelectEmployees && config && config.id && isDateSelect && isHourSelect) {
        const result = await createSchedule(user, servicesSelect, isSelectEmployees, config.id, isDateSelect, isHourSelect, observation ?? '', captchatoken);

        if (result.obj && result.ok) {
          onToast({
            message: 'Agendamento feito com sucesso.',
            type: 'success',
          });
          push({
            pathname: `/appointments/${result.obj.idAgenda}`,
            query: {
              companyId: result.obj.idEmpresa,
            },
          });
        } else {
          onToast({
            message: result.mensagem ?? 'Ocorreu um erro de comunicação.',
            type: 'error',
          });
        }
      }
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      onToast({
        message: err ?? 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [config, isDateSelect, servicesSelect, isHourSelect, user, isSelectEmployees, onToast, push]);

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

  const isAmoutValueServicesSelect = useMemo((): number => {
    const isServicesSelect = services?.filter((service) => servicesSelect?.includes(service.id));

    const isSum = isServicesSelect?.reduce((prev, curr) => {
      return prev + curr.preco;
    }, 0);

    return isSum ?? 0;
  }, [services, servicesSelect]);

  const isServicesSelected = useMemo((): ServicesCompanyProps[] => {
    if (services && servicesSelect) {
      return services?.filter((i) => servicesSelect?.includes(i.id));
    }
    return [];
  }, [services, servicesSelect]);

  useEffect(() => {
    if (!openFlowSchedule) {
      if (employees && employees.length <= 1) {
        handleSelectStepper(stepperScheduleFlow[1]);
      } else {
        handleSelectStepper(stepperScheduleFlow[0]);
      }
    }
  }, [handleSelectStepper, openFlowSchedule, employees]);

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
      loadingSubmitWaitingList: isLoadingSubmitWaitingList,
      amoutValueServicesSelect: isAmoutValueServicesSelect,
      servicesSelected: isServicesSelected,
      loading: isLoading,
      onSelectDate: handleSelectDate,
      onSelectStepper: handleSelectStepper,
      onSelectEmployees: handleSelectEmployees,
      onSelectHour: handleSelectHour,
      onAddFieldDateInWaitingList: handleAddFieldDateInWaitingList,
      onRemovedFieldDateInWaitingList: handleRemovedFieldDateInWaitingList,
      onSubmitSaveWaitingList: handleSubmitSaveWaitingList,
      onLoadHoursPerEmployee: handleLoadHoursPerEmployee,
      onSubmitCreateSchedule: handleSubmitCreateSchedule,
    }}
    >
      {children}
    </ScheduleFlowContext.Provider>
  );
}
