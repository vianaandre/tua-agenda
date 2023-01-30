import { CategoriesProps } from 'common/interface/CategoriesProps';
import { CityProps } from 'common/interface/CityProps';
import { ServiceProps } from 'common/interface/ServiceProps';

export interface HomeProps {
    services: ServiceProps[];
    cities: CityProps[];
    categories: CategoriesProps[];
}
