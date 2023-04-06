import { GatewaysProps } from './GatewaysProps';

export type CompanyAlternativeProps = {
    id: number;
    nome?: string;
    usuario?: string;
    metaDescricao?: string;
    linkImagem?: string;
    dtValidade?: string;
    dtUpdate?: number;
    localizacao?: number[];
    endereco?: string;
    complemento?: string,
    bairro?: string;
    numero?: string;
    cep?: string;
    cidade?: string;
    telefone?: string;
    telefone2?: string;
    countryCode?: string;
    distanciaMaxKmAgendamentoCliente?: any;
    stLoginObrigatorioCliente?: boolean;
    stListaEspera?: any;
    stPermiteClienteAgendar?: string;
    dtAtualizacao?: string;
    distancia?: any;
    configPagamento?: {
        dtConfig?: string;
        peValorAgendamento?: number;
        gateways?: GatewaysProps[];
    };
    urlFotos?: any;
    enderecoCompleto?: string;
    telefoneSemFormatacao?: string;
    telefone2SemFormatacao?: string;
}
