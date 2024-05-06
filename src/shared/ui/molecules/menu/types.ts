import {Dispatch, SetStateAction} from "react";
import {IRoutes} from "shared/types";

export interface IMenu {
    routes: IRoutes[];
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}