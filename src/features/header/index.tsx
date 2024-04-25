import React, {useState} from "react";
import {AppBar, Box, IconButton, Link, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {Messages} from "shared/messages";
import {Menu} from "shared/ui";
import {IHeader} from "./types";

export const Header: React.FC<IHeader> = ({routes}) => {

    const [open, setOpen] = useState(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {Messages.header.title}
                    </Typography>
                    <Menu routes={routes} open={open} setOpen={setOpen} />
                </Toolbar>
            </AppBar>
        </Box>
    )
}