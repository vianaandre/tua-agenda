import { ConfigProps } from './ConfigProps';
import { EmployeeProductProps } from './EmployeeProductProps';
import { EmployeeProps } from './EmployeeProps';
import { IntlProps } from './IntlProps';
import { ProductProps } from './ProductProps';
import { ServicesCompanyProps } from './ServiceCompanyProps';

export interface CompanyProps {
    config: ConfigProps;
    intl: IntlProps;
    servicos: ServicesCompanyProps[];
    produtos: ProductProps[];
    funcionarios: EmployeeProps[];
    funcionarioProduto: EmployeeProductProps[]
}
