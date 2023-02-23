import { ConfigProps } from './ConfigProps';
import { IntlProps } from './IntlProps';

export interface CompanyProps {
    config: ConfigProps;
    intl: IntlProps;
    servicos: any[];
    produtos: any[];
    funcionarios: any[];
    funcionarioProduto: any[]
}
