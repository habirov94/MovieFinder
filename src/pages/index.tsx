import {IRoutes} from "shared/types";
import {MainPage} from "pages/main-page";



export const routes:IRoutes[] = [
    {
        name: "Главная",
        index: true,
        element: <MainPage />,
        component: <MainPage />
    },
    {
        name: "Главная",
        path: "/main",
        isVisible: true,
        component: <MainPage />
    }
]
