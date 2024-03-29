export type VarientCardCompanyProps = 'small' | 'large';

export interface CardCompanyProps {
    image?: string;
    logo?: string;
    name?: string;
    address?: string;
    // evaluation: number;
    // categories: string[];
    variant: VarientCardCompanyProps;
    usuario?: string;
}
