export type variant = 'small' | 'medium' | 'large';

export interface IAvatar {
    username: string;
    image?: string;
    variant?: variant;
}
