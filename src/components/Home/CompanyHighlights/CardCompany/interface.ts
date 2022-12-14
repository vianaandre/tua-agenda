export interface ICardCompany {
    image: string;
    logo?: string;
    name: string;
    address: {
        city: string;
        state: string;
    };
    evaluation: number;
    categories: string[];
}
