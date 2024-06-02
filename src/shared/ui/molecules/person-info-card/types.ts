export interface IPersonInfoCard {
    id?: number;
    age?: number;
    name?: string;
    birthday?: string;
    death?: string;
    growth?: number;
    enName?: string;
    photo?: string;
    sex?: string;
    skeleton?: boolean;
    onClick?: (id?: number) => void;
}