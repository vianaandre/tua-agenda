import React, { useCallback, useEffect, useState } from 'react';
import { createContext } from 'use-context-selector';
import { useRouter } from 'next/router';

import { useToast } from 'common/hooks/useToast';
import { findSchedule } from 'services/modules/schedule';
import { useAuth } from 'common/hooks/useAuth';
import { getToken } from 'utils/getToken';
import { ScheduleResponseProps } from 'common/interface/ScheduleResponseProps';
import { findByCompany } from 'services/modules/company ';
import { ConfigProps } from 'common/interface/ConfigProps';
import { ResponseProps } from 'common/interface/ResponseProps';
import { CompanyProps } from 'common/interface/CompanyProps';
import { useCompany } from 'common/hooks/useCompany';

interface DetailsScheduleContextProps {
    schedule?: ScheduleResponseProps;
    loading: boolean;
    company?: ConfigProps;
}

export const DetailsScheduleContext = createContext({} as DetailsScheduleContextProps);

export function DetailsScheduleProvider({ children }: { children: React.ReactNode }) {
  const { onToast } = useToast();
  const { user } = useAuth();
  const { query } = useRouter();
  const { id, companyId, link } = query as { id: string; companyId: string, link: string };
  const {
    onUpdatedStates, onSelectEmployees, employees, onSelectService, selectEmployees,
  } = useCompany();

  const [isSchedule, setIsSchedule] = useState<ScheduleResponseProps>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLoadCompany = useCallback(async () => {
    try {
      if (link) {
        const company = await findByCompany(link) as ResponseProps<CompanyProps>;
        if (!company.ok) {
          onToast({
            message: company.mensagem ?? 'Ocorreu um erro de comunicação.',
            type: 'error',
          });
        } else if (company.obj) {
          onUpdatedStates(company.obj);
        }
      }
    } catch (err: any) {
      setIsLoading(false);
      onToast({
        message: err ?? 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [onToast, link, onUpdatedStates]);

  const handleLoadSchedule = useCallback(async () => {
    try {
      const isToken = getToken() as string;
      if (user && user.id && id && isToken && companyId) {
        setIsLoading(true);
        const schedule = await findSchedule(companyId, id, isToken, user.id);

        if (schedule && schedule.obj && schedule.ok) {
          setIsSchedule(schedule.obj);
        } else {
          onToast({
            message: schedule?.mensagem ?? 'Ocorreu um erro de comunicação.',
            type: 'error',
          });
        }

        setIsLoading(false);
      }
    } catch (err: any) {
      setIsLoading(false);
      onToast({
        message: err ?? 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [onToast, user, id, companyId]);

  const handleSelectEmployee = useCallback(() => {
    if (!selectEmployees || selectEmployees.length <= 0) {
      const isEmployee = employees?.find((employee) => employee.id === isSchedule?.idFuncionario);
      const isIdsServices = isSchedule?.itens.map((item) => item.id);

      if (isEmployee && !selectEmployees) {
        onSelectEmployees(isEmployee);
      }
      if (isIdsServices && isIdsServices.length > 0) {
        onSelectService(isIdsServices[0], isIdsServices);
      }
    }
  }, [employees, isSchedule, onSelectEmployees, onSelectService, selectEmployees]);

  useEffect(() => {
    handleLoadSchedule();
    handleLoadCompany();
  }, [handleLoadSchedule, handleLoadCompany]);

  useEffect(() => {
    handleSelectEmployee();
  }, [handleSelectEmployee]);

  return (
    <DetailsScheduleContext.Provider value={{ schedule: isSchedule, loading: isLoading }}>
      {children}
    </DetailsScheduleContext.Provider>
  );
}
