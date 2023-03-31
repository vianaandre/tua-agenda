export type CardServiceProps = {
    tag: number;
    name: string;
    description: string;
    duration: string;
    value: number;
    category: string;
    remove: () => void;
    disabledRemove: boolean;
}
