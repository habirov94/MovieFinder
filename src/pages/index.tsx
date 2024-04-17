import {MainPage} from "./main-page";
import {IRoutes} from "../shared/types/routes";

export const routes:IRoutes[] = [
    {
        name: "Главная",
        path: "/main",
        component: <MainPage />
    }
]

