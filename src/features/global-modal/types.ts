import {ReactNode} from "react";

export interface ISetModalData {
    content: ReactNode;
}

export interface IModalData extends ISetModalData {
    key: number;
}