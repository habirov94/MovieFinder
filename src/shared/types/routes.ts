import React from "react";

export interface IRoutes {
    name: string,
    path?: string,
    index?: boolean,
    component: React.ReactNode,
    element?: React.ReactNode,
    isVisible?: boolean
}