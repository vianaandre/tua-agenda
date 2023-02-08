import { MethodLoginProps } from './MethodLoginProps';

export interface UserProps {
    nome: string | null;
    email?: string | null;
    senha?: string;
    keepConnected?: boolean;
    telefone?: string | null;
    codPais?: string;
    id?: string;
    imageUrl?: string | null;
    metodoLogin: MethodLoginProps;
}
