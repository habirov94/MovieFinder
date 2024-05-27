import React from "react";
import {IRoutes} from "shared/types";
import {MainPage} from "./main-page";
import {personsPage} from "./persons-page";

export const routes:IRoutes[] = [
    {
        name: "Главная",
        index: true,
        element: React.createElement(MainPage),
        component: React.createElement(MainPage)
    },
    {
        name: "Главная",
        path: "/main",
        isVisible: true,
        component: React.createElement(MainPage)
    },
    {
        name: "Актеры",
        path: "/persons",
        isVisible: true,
        component: React.createElement(personsPage)
    },
]
