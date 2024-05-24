import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "pages";
import {Header, GlobalModal} from "features";

export const App = () => {
    return (
        <BrowserRouter>

            <Header routes={routes}/>

            <GlobalModal/>

            <Routes>
                {routes.map(({path, name, index, component}) => {
                    return <Route index={index} key={name} path={path} element={component}/>
                })}
            </Routes>

        </BrowserRouter>
    );
}
