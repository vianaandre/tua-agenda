import { ScheduleFlowContext } from 'common/context/ScheduleFlowContext';
import { useContextSelector } from 'use-context-selector';

export function useScheduleFlow() {
  const stepper = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.stepper);
  const selectEmployees = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.selectEmployees);
  const servicesPerEmployees = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.servicesPerEmployees);
  const onSelectStepper = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.onSelectStepper);
  const onSelectEmployees = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.onSelectEmployees);

  return {
    stepper,
    selectEmployees,
    servicesPerEmployees,
    onSelectStepper,
    onSelectEmployees,
  };
}
