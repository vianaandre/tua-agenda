import { useContextSelector } from 'use-context-selector';

import { DetailsScheduleContext } from 'common/context/DetailsSCheduleContext';

export const useDetailsSchedule = () => {
  const schedule = useContextSelector(DetailsScheduleContext, (detailsSchedule) => detailsSchedule.schedule);
  const loading = useContextSelector(DetailsScheduleContext, (detailsSchedule) => detailsSchedule.loading);

  return {
    schedule,
    loading,
  };
};
