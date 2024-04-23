import styled from "styled-components";
import {useGate} from "effector-react";
import {MainPageGate} from "./model";
import {Sidebar} from "shared/ui";

export const MainPage = () => {
    useGate(MainPageGate)

    return (
        <MainPageWrap>
            <div className='main-page-content-container'>

            </div>
            <div className='sidebar-container'>
                <Sidebar header='Index' footer='  eeeeeeeee '>123jdhf;kjsldhf;k ;sdlfh;s dsdl fh;sdljh s;d h;sk jh;s
                    kjdhf; kjsdhf ;kjsdh f</Sidebar>
            </div>
        </MainPageWrap>
    )
}

const MainPageWrap = styled.div`
    display: flex;
    width: 100%;

    .main-page-content-container {
        flex: 3;
    }

    .sidebar-container {
        flex: 1;
    }
`
