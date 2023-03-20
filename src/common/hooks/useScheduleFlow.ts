import { ScheduleFlowContext } from 'common/context/ScheduleFlowContext';
import { useContextSelector } from 'use-context-selector';

export function useScheduleFlow() {
  const stepper = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.stepper);
  const selectEmployees = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.selectEmployees);
  const servicesPerEmployees = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.servicesPerEmployees);
  const dateAvailable = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.dateAvailable);
  const dateSelect = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.dateSelect);
  const hoursAvailablePerDate = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.hoursAvailablePerDate);
  const hourSelect = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.hourSelect);
  const loadingHours = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.loadingHours);
  const fieldsDate = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.fieldsDate);
  const onSelectStepper = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.onSelectStepper);
  const onSelectEmployees = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.onSelectEmployees);
  const onSelectDate = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.onSelectDate);
  const onSelectHour = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.onSelectHour);
  const onAddFieldDateInWaitingList = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.onAddFieldDateInWaitingList);
  const onRemovedFieldDateInWaitingList = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.onRemovedFieldDateInWaitingList);
  const onSubmitSaveWaitingList = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.onSubmitSaveWaitingList);

  return {
    stepper,
    dateSelect,
    dateAvailable,
    servicesPerEmployees,
    selectEmployees,
    hoursAvailablePerDate,
    hourSelect,
    loadingHours,
    fieldsDate,
    onSelectHour,
    onSelectStepper,
    onSelectEmployees,
    onSelectDate,
    onAddFieldDateInWaitingList,
    onRemovedFieldDateInWaitingList,
    onSubmitSaveWaitingList,
  };
}
