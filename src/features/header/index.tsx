import React from "react";
import styled from "styled-components";
import {Header as CarbonHeader, Link, Grid, Column} from "@carbon/react";
import {IHeader} from "./types";
import {Messages} from "shared/messages";



export const Header: React.FC<IHeader> = ({routes}) => {
    return (
        <HeaderWrap>
            <CarbonHeader>
                <Grid condensed>
                    <p className="header-title">{Messages.header.title}</p>
                </Grid>
                <Grid condensed>
                    {routes
                        .filter(({isVisible}) => isVisible)
                        .map(({path, name}) => {
                            return <Column sm={1} key={name}><Link href={path} >{name}</Link></Column>
                        })}
                </Grid>
            </CarbonHeader>
        </HeaderWrap>
    )
}

const HeaderWrap = styled.div `
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
