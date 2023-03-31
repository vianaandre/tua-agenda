import { UserProps } from './UserProps';

export type SchedulePayloadProps = {
    cliente: UserProps;
    produtos: string[];
    idFuncionario: string;
    idEmpresa: number;
    data: string;
    hora: string;
    observacaoPublica: string;
    latitude: number;
    longitude: number;
}
