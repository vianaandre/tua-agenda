import { ScheduleServiceProps } from './ScheduleServiceProps';

export type ScheduleResponseProps = {
    idAgenda: string;
    situacao: string;
    tipo: string;
    idEmpresa: number;
    nomeEmpresa: string;
    usuarioEmpresa: string;
    idFuncionario: string;
    nomeFuncionario: string;
    observacaoPublica?: string;
    pagtoIntegrado: boolean;
    inicio: number;
    dtHrAgendamento: number;
    total: number;
    itens: ScheduleServiceProps[];
    dtHrAgendamentoFmt: string;
    inicioFmt: string;
    totalFmt: string;
    labelTotal: string;
    enabledCancelamento: boolean;
    motivoBloqueioCancelamento?: any;
    situacaoFmt: string;
}
