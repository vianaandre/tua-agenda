import { RefreshTokenProps } from './RefreshTokenProps';

export interface UserProps {
    nome?: string;
    email?: string;
    senha?: string;
    keepConnected?: boolean;
    telefone?: string;
    telefone1?: string;
    codPais?: string;
    id?: string;
    imageUrl?: string | null;
    metodoLogin?: string;
    ['auth-uid']?: string;
    provider?: string;
    raw?: RefreshTokenProps;
    token_whypwd?: string;
    cidade?: string;
    rua?: string;
    cep?: string;
    pais?: string;
    estado?: string;
    dtInclusaoFmt?: string;
    dtNascimento?: string;
    dtNascimentoFmt?: string;
    cpf?: string;
    country?: string;
    numero?: string;
    complemento?: string;
    phone?: string;
    bairro?: string;
}

export interface RequestUserProps {
    id?: string;
    nome?: string;
    email?: string;
    codPais?: string;
    telefone?: string;
    dtNascimento?: string;
    cpf?: string;
    cep?: string;
    rua?: string;
    numero?: string;
    complemento?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    pais?: string;
    informouEndereco?: boolean;
    imageUrl?: string;
}
