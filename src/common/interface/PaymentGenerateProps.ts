export type PaymentGenerateProps = {
    id: string;
    idReferencia: string;
    gateway: string;
    link: string;
    status: string;
    statusRaw: any;
    valor: number;
    valorLiquido: number;
    valorLiquidoObs: string;
    observacao: string;
    corRgb: string;
    dtInclusaoFmt: string;
    valorFmt: string;
}
