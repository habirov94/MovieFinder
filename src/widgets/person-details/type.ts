export interface IPersonDetails {
    personId: number;
    onClick?: (id?: number) => void;
}

export interface IPerson {
    [key: number]: any;
}