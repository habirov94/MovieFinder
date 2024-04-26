export interface ISelect {
    items?: Items[];
    value: string;
    onChange?: (arg1:string) => {};
}

interface Items {
    name: string;
    value: string;
}
