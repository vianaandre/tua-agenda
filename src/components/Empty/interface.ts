export interface EmptyProps {
    text: string;
    buttonBack?: {
        active: boolean;
        onClick: () => void;
    };
}
