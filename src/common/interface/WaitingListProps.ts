import { UserProps } from './UserProps';

export type FormWaitingListProps = {
    observation: string;
    user: UserProps;
    date: Array<{
        date: string;
        hour: string;
        anyTime: boolean;
    }>;
    services?: string[];
    employeeId?: string;
    companyId: number;
}

export type DateProps = {
    dataStr: string;
    data: string;
    hora: string;
    qualquerHora: boolean;
    invalido: boolean;
    msgData: string;
    msgHora: string;
}

export type RequestWaitingListProps = {
    observacao: string;
    datas: DateProps[];
    itens?: Array<{ idProduto: string; }>;
    idFuncionario?: string;
    idEmpresa: number;
    idCliente?: number;
}
