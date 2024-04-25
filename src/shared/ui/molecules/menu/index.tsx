import React from "react";
import {useNavigate} from "react-router-dom";
import {Box, Button, Drawer, ListItem} from "@mui/material";
import {IMenu} from "shared/ui/molecules/menu/types";


export const Menu: React.FC<IMenu> = ({routes, open, setOpen}) => {

    const navigate = useNavigate()

    return (
        <Drawer open={open} onClose={() => setOpen(false)}>
            <Box sx={{ minWidth: '20rem' }} role="presentation">
                {routes
                    .filter(({isVisible}) => isVisible)
                    .map(({path, name}) => {
                        return <ListItem sx={{ display: 'flex', justifyContent: 'center' }} key={name}><Button onClick={() => navigate(path ?? "")}>{name}</Button></ListItem>
                    })}
            </Box>
        </Drawer>
    )
}

