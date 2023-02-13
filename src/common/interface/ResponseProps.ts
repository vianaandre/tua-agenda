export interface ResponseProps<T> {
    errorCode?: number;
    mensagem?: string;
    obj?: T;
    ok: boolean;
}
