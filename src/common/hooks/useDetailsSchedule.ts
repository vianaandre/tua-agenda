import { useContextSelector } from 'use-context-selector';

import { DetailsScheduleContext } from 'common/context/DetailsSCheduleContext';

export const useDetailsSchedule = () => {
  const schedule = useContextSelector(DetailsScheduleContext, (detailsSchedule) => detailsSchedule.schedule);
  const loading = useContextSelector(DetailsScheduleContext, (detailsSchedule) => detailsSchedule.loading);
  const company = useContextSelector(DetailsScheduleContext, (detailsSchedule) => detailsSchedule.company);
  const companyDataAlternative = useContextSelector(DetailsScheduleContext, (detailsSchedule) => detailsSchedule.companyDataAlternative);
  const selectMethodPayment = useContextSelector(DetailsScheduleContext, (detailsSchedule) => detailsSchedule.selectMethodPayment);
  const paymentsGenerate = useContextSelector(DetailsScheduleContext, (detailsSchedule) => detailsSchedule.paymentsGenerate);
  const loadingPaymnetGenerate = useContextSelector(DetailsScheduleContext, (detailsSchedule) => detailsSchedule.loadingPaymnetGenerate);
  const loadingCancelSchedule = useContextSelector(DetailsScheduleContext, (detailsSchedule) => detailsSchedule.loadingCancelSchedule);

  const onSelectedMethodPayment = useContextSelector(DetailsScheduleContext, (detailsSchedule) => detailsSchedule.onSelectedMethodPayment);
  const onGeneratePayment = useContextSelector(DetailsScheduleContext, (detailsSchedule) => detailsSchedule.onGeneratePayment);
  const onCancelSchedule = useContextSelector(DetailsScheduleContext, (detailsSchedule) => detailsSchedule.onCancelSchedule);

  return {
    schedule,
    loading,
    company,
    companyDataAlternative,
    selectMethodPayment,
    paymentsGenerate,
    loadingPaymnetGenerate,
    loadingCancelSchedule,
    onSelectedMethodPayment,
    onGeneratePayment,
    onCancelSchedule,
  };
};
