import { RefreshTokenProps } from './RefreshTokenProps';

export interface UserProps {
    nome?: string | null;
    email?: string | null;
    senha?: string;
    keepConnected?: boolean;
    telefone?: string | null;
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
}
