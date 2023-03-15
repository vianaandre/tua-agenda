import { ScheduleFlowContext } from 'common/context/ScheduleFlowContext';
import { useContextSelector } from 'use-context-selector';

export function useScheduleFlow() {
  const stepper = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.stepper);
  const onSelectStepper = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.onSelectStepper);

  return {
    stepper,
    onSelectStepper,
  };
}
