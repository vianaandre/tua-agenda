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
}
