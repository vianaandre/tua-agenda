import React, { useCallback, useEffect, useState } from 'react';
import { createContext } from 'use-context-selector';
import { useRouter } from 'next/router';

import { useToast } from 'common/hooks/useToast';
import { findSchedule } from 'services/modules/schedule';
import { useAuth } from 'common/hooks/useAuth';
import { getToken } from 'utils/getToken';
import { ScheduleResponseProps } from 'common/interface/ScheduleResponseProps';
import { findByCompany, findByIdCompany } from 'services/modules/company ';
import { ConfigProps } from 'common/interface/ConfigProps';
import { ResponseProps } from 'common/interface/ResponseProps';
import { CompanyProps } from 'common/interface/CompanyProps';
import { useCompany } from 'common/hooks/useCompany';
import { CompanyAlternativeProps } from 'common/interface/CompanyAlternativeProps';
import { findPayment, generatePayment } from 'services/modules/payment';
import { captchatoken } from 'common/mock/captchatoken';
import { PaymentGenerateProps } from 'common/interface/PaymentGenerateProps';

interface DetailsScheduleContextProps {
    schedule?: ScheduleResponseProps;
    loading: boolean;
    company?: ConfigProps;
    companyDataAlternative?: CompanyAlternativeProps;
    selectMethodPayment?: string;
    paymentsGenerate: PaymentGenerateProps[];
    loadingPaymnetGenerate: boolean;
    onSelectedMethodPayment: (id: string) => void;
    onGeneratePayment: () => Promise<void>;
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
  const [isCompanyDataAlternative, setIsCompanyDataAlternative] = useState<CompanyAlternativeProps>();
  const [isSelectMethodPayment, setIsSelectMethodPayment] = useState<string>();
  const [isPaymentsGenerate, setIsPaymentsGenerate] = useState<PaymentGenerateProps[]>([]);
  const [isLoadingPaymnetGenerate, setIsLoadingPaymentGenerate] = useState<boolean>(false);

  const handleSelectedMethodPayment = (id: string) => setIsSelectMethodPayment((current) => (current === id ? undefined : id));

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
        const schedule = await findSchedule(companyId, id, isToken, user.id);

        if (schedule && schedule.obj && schedule.ok) {
          setIsSchedule(schedule.obj);
        } else {
          onToast({
            message: schedule?.mensagem ?? 'Ocorreu um erro de comunicação.',
            type: 'error',
          });
        }
      }
    } catch (err: any) {
      setIsLoading(false);
      onToast({
        message: err ?? 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [onToast, user, id, companyId]);

  const handleLoadCompanyPerId = useCallback(async () => {
    try {
      if (companyId) {
        const result = await findByIdCompany(companyId);

        setIsCompanyDataAlternative(result);
      }
    } catch (err: any) {
      onToast({
        message: err ?? 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [companyId, onToast]);

  const handleSelectEmployee = useCallback(() => {
    const isEmployee = employees?.find((employee) => employee.id === isSchedule?.idFuncionario);
    const isIdsServices = isSchedule?.itens.map((item) => item.id);

    if (isEmployee && (!selectEmployees || selectEmployees.length <= 0)) {
      onSelectEmployees(isEmployee);
    }
    if (isIdsServices && isIdsServices.length > 0) {
      onSelectService(isIdsServices[0], isIdsServices);
    }
  }, [employees, isSchedule, onSelectEmployees, onSelectService, selectEmployees]);

  const handleLoadPayment = useCallback(async () => {
    try {
      if (isSchedule && isSchedule.idAgenda && companyId) {
        const result = await findPayment(isSchedule.idAgenda, companyId, captchatoken);

        if (result && result.length > 0) {
          setIsPaymentsGenerate(result);
        }
      }
    } catch (err: any) {
      onToast({
        message: 'Não é possível gerar o link de pagamento.',
        type: 'info',
      });
    }
  }, [isSchedule, companyId, onToast]);

  const handleGeneratePayment = useCallback(async () => {
    try {
      setIsLoadingPaymentGenerate(true);
      if (isSchedule && isSchedule.idAgenda && companyId && isSelectMethodPayment) {
        const result = await generatePayment(isSchedule.idAgenda, companyId, isSelectMethodPayment, captchatoken);

        if (result) {
          setIsPaymentsGenerate([result]);
          onToast({
            message: 'Link de pagamento gerado.',
            type: 'success',
          });
        } else {
          onToast({
            message: 'Não é possível gerar o link de pagamento.',
            type: 'info',
          });
        }
      } else {
        onToast({
          message: 'Não é possível gerar o link de pagamento.',
          type: 'info',
        });
      }
      setIsLoadingPaymentGenerate(false);
    } catch (err: any) {
      setIsLoadingPaymentGenerate(false);
      onToast({
        message: err ?? 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [isSchedule, isSelectMethodPayment, companyId, onToast]);

  useEffect(() => {
    handleLoadSchedule();
  }, [handleLoadSchedule]);

  useEffect(() => {
    handleLoadCompanyPerId();
  }, [handleLoadCompanyPerId]);

  useEffect(() => {
    handleLoadCompany();
  }, [handleLoadCompany]);

  useEffect(() => {
    handleSelectEmployee();
  }, [handleSelectEmployee]);

  useEffect(() => {
    if (isSchedule) {
      handleLoadPayment();
    }
  }, [isSchedule, handleLoadPayment]);

  return (
    <DetailsScheduleContext.Provider value={{
      schedule: isSchedule, loading: isLoading, companyDataAlternative: isCompanyDataAlternative, selectMethodPayment: isSelectMethodPayment, paymentsGenerate: isPaymentsGenerate, loadingPaymnetGenerate: isLoadingPaymnetGenerate, onSelectedMethodPayment: handleSelectedMethodPayment, onGeneratePayment: handleGeneratePayment,
    }}
    >
      {children}
    </DetailsScheduleContext.Provider>
  );
}
