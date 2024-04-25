import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "features";
import {routes} from "pages";
export const App = () => {
    return (
        <BrowserRouter>
            <Header routes={routes}/>
                <Routes>

                    {routes.map(({path, name, index, component}) => {
                        return <Route index={index}  key={name} path={path} element={component}/>
                    })}

                </Routes>
        </BrowserRouter>
    );
}
