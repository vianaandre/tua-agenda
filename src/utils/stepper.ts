import { StepperProps } from 'common/interface/StepperProps';

export const stepperAuthPerPhone: StepperProps[] = [
  {
    stepper: 0,
    stage: 'Inserir telefone',
  },
  {
    stepper: 1,
    stage: 'Inserir código',
  },
  {
    stepper: 2,
    stage: 'Sucesso',
  },
];

export const stepperScheduleFlow: StepperProps[] = [
  {
    stage: 'Profissionais',
    stepper: 0,
    description: 'Escolha um profissional',
  },
  {
    stage: 'Serviço',
    stepper: 1,
    description: 'Escolha o que você deseja',
  },
  {
    stage: 'Agendamento',
    stepper: 2,
    description: 'Escolha a data e o horário',
  },
  {
    stage: 'Resumo',
    stepper: 3,
    description: 'Revise todos os dados do seu agendamento',
  },
];
