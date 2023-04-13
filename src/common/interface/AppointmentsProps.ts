import { ScheduleServiceProps } from './ScheduleServiceProps';
import { StatusAppointmentsProps } from './StatusAppointmentsProps';

export type AppointmentsProps = {
    idAgenda: string;
    inicio: string;
    fim: string;
    dtHrAgendamento: string;
    total: number;
    situacao: StatusAppointmentsProps;
    tipo: string;
    idEmpresa: number;
    nomeEmpresa: string;
    usuarioEmpresa: string;
    idFuncionario: string;
    nomeFuncionario: string;
    observacaoPublica?: string;
    itens: ScheduleServiceProps[];
    stPrecoVisivelCliente: boolean;
    pagtoIntegrado: boolean;
    dtHrAgendamentoFmt: string;
    totalFmt: string;
    inicioFmt: string;
    situacaoFmt: string;
    labelTotal: string;
    enabledCancelamento: boolean;
    motivoBloqueioCancelamento: string;
}
