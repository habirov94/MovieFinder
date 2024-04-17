import styled from "styled-components";
import {Column, Grid} from "@carbon/react";
import {Sidebar} from "../../shared/ui/atoms/sidebar";

export const MainPage = () => {
    return (
        <Grid condensed>
            <Column sm={100}>
                <MainPageWrap>
                    <Sidebar header='Header' footer='Footerrrrrrrrreeeeeeeeeeeeeeeeeeeeeeeee eeeeerreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee eeeeeeeee eeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrwerwrwerwerwerwerweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrr' >123</Sidebar>
                </MainPageWrap>
            </Column>
        </Grid>
    )
}

const MainPageWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    
    .block-wrapper {
        width: 49%;
        border: solid 1px black;
        padding: 1rem;
    }

    div::-webkit-scrollbar {
        width: 0 !important;
        display: none;
    }
`
