import styled from "styled-components";
import {Paper} from "@mui/material";

interface ISidebar {
    children: React.ReactNode,
    header?: React.ReactNode,
    footer?: React.ReactNode,
}

export const Sidebar: React.FC<ISidebar> = ({
                                                children,
                                                header,
                                                footer
                                            }) => {
    return (
        <SidebarWrap>
            <Paper elevation={3} className="sidebar-paper">
                <div className='sidebar-contetn-container'>
                    <div className='sidebar-header'>{header}</div>
                    <div className='sidebar-children'>{children}</div>
                </div>
                <div className='sidebar-footer'>{footer}</div>
            </Paper>
        </SidebarWrap>
    )
}

const SidebarWrap = styled.div`
    .sidebar-paper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100vh - 63px);
        min-width: 10%;
        overflow: visible;
    }
    
    .sidebar-header {
        padding: 1rem;
        border-bottom: solid 1px black;
    }

    .sidebar-children {
        padding: 1rem;
    }

    .sidebar-footer {
        padding: 1rem;
    }
`



