import { useContextSelector } from 'use-context-selector';

import { ScheduleContext } from 'common/context/ScheduleContext';

export function useSchedule() {
  const step = useContextSelector(ScheduleContext, (schedule) => schedule.step);
  const onChangeStep = useContextSelector(ScheduleContext, (schedule) => schedule.onChangeStep);

  return {
    step,
    onChangeStep,
  };
}
