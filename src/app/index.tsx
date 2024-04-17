import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "../pages";
import {HeaderMenu} from "../features/header/header-menu";
import styled from "styled-components";


export const App = () => {
    return (
        <BrowserRouter>
            <HeaderMenu routes={routes}/>
            <PageWrap>
                <Routes>

                    {routes.map(({path, name, component}) => {
                        return <Route key={name} path={path} element={component}/>
                    })}

                </Routes>
            </PageWrap>
        </BrowserRouter>
    );
}

const PageWrap = styled.div`
    padding-top: 3rem;
`