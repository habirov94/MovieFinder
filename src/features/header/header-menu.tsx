import React from "react";
import {Header, Link, Grid, Column} from "@carbon/react";
import {IHeaderMenu} from "./types";
import styled from "styled-components";
import {Messages} from "../../shared/messages";


export const HeaderMenu: React.FC<IHeaderMenu> = ({routes}) => {
    return (
        <HeaderMenuWrap>
            <Header>
                <Grid condensed>
                    <p className="header-title">{Messages.header.title}</p>
                </Grid>
                <Grid condensed>
                    {routes.map(({path, name}) => {
                        return <Column sm={1} key={name}><Link href={path} >{name}</Link></Column>
                    })}
                </Grid>
            </Header>
        </HeaderMenuWrap>

    )
}

const HeaderMenuWrap = styled.div `
    .cds--header {
        background-color: #000000;
        
    }
    .cds--link {
        text-decoration: none;
        color: aliceblue;
    }
    .cds--link:hover {
        text-decoration: none;
        color: aliceblue;
    }
    .header-title {
        color: aliceblue;
    }
    
`
