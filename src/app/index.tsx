import React from 'react';
import styled from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "features";
import {routes} from "pages";
export const App = () => {
    return (
        <BrowserRouter>
            <Header routes={routes}/>
            <PageWrap>
                <Routes>

                    {routes.map(({path, name, index, component}) => {
                        return <Route index={index}  key={name} path={path} element={component}/>
                    })}

                </Routes>
            </PageWrap>
        </BrowserRouter>
    );
}

const PageWrap = styled.div`
    padding-top: 3rem;
`