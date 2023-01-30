import { CategoriesProps } from './CategoriesProps';
import { CityProps } from './CityProps';
import { ServiceProps } from './ServiceProps';

export interface HomeProps {
    services: ServiceProps[];
    categories: CategoriesProps[];
    cities: CityProps[];
}
