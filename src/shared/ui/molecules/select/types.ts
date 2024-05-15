export interface ISelect {
    items?: Items[];
    value: string;
    onChange?: (arg1:string) => {};
    disabled: boolean;
}

interface Items {
    name: string;
    value: string;
}
