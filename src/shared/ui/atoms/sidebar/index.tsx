import styled from "styled-components";

interface ISidebar {
    children: React.ReactNode,
    header?: React.ReactNode,
    footer?: React.ReactNode,
}

export const Sidebar:React.FC <ISidebar> = ({
                                                children,
                                                header ,
                                                footer
}) => {
    return (
        <SidebarWrap>
            <div className='sidebar-contetn-container'>
                <div className='sidebar-header'>{header}</div>
                <div className='sidebar-children'>{children}</div>
            </div>
            <div className='sidebar-footer'>{footer}</div>
        </SidebarWrap>
    )
}

const SidebarWrap = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 48px);
    max-width: 30%;
    background-color: black;
    color: white;
    overflow: auto;
  
    .sidebar-header {
        padding: 1rem;
        border-bottom: solid 1px white;
    }
    
    .sidebar-children {
        padding: 1rem;
    }
    
    .sidebar-footer {
        border-top: solid 1px white;
    }
`



