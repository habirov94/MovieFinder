export interface ISelect {
    items?: ISelectItems[];
    value: string;
    onChange?: (arg1:string) => {};
    disabled: boolean;
    label?: string;
    skeleton?: boolean;
}

export interface ISelectItems {
    name: string;
    value: string;
}
