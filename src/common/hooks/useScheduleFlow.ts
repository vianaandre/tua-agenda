import { ScheduleFlowContext } from 'common/context/ScheduleFlowContext';
import { useContextSelector } from 'use-context-selector';

export function useScheduleFlow() {
  const stepper = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.stepper);
  const dateAvailable = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.dateAvailable);
  const dateSelect = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.dateSelect);
  const hoursAvailablePerDate = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.hoursAvailablePerDate);
  const hourSelect = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.hourSelect);
  const loadingHours = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.loadingHours);
  const fieldsDate = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.fieldsDate);
  const loadingSubmitWaitingList = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.loadingSubmitWaitingList);
  const amoutValueServicesSelect = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.amoutValueServicesSelect);
  const servicesSelected = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.servicesSelected);
  const loading = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.loading);

  const onSelectStepper = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.onSelectStepper);
  const onSelectDate = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.onSelectDate);
  const onSelectHour = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.onSelectHour);
  const onAddFieldDateInWaitingList = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.onAddFieldDateInWaitingList);
  const onRemovedFieldDateInWaitingList = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.onRemovedFieldDateInWaitingList);
  const onSubmitSaveWaitingList = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.onSubmitSaveWaitingList);
  const onLoadHoursPerEmployee = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.onLoadHoursPerEmployee);
  const onSubmitCreateSchedule = useContextSelector(ScheduleFlowContext, (scheduleFlow) => scheduleFlow.onSubmitCreateSchedule);

  return {
    stepper,
    dateSelect,
    dateAvailable,
    hoursAvailablePerDate,
    hourSelect,
    loadingHours,
    fieldsDate,
    loadingSubmitWaitingList,
    amoutValueServicesSelect,
    servicesSelected,
    loading,
    onSelectHour,
    onSelectStepper,
    onSelectDate,
    onAddFieldDateInWaitingList,
    onRemovedFieldDateInWaitingList,
    onSubmitSaveWaitingList,
    onLoadHoursPerEmployee,
    onSubmitCreateSchedule,
  };
}
