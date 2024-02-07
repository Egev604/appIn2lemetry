import React from 'react';
import {Avatar, Divider, Drawer, IconButton, List, ListItem, ListItemText} from "@mui/material";
import NightModeToggle from "./NightModeToggle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from '@mui/icons-material/Close';
interface MenuProps {
    isMenuOpen?:boolean
    toggleMenu:()=>void
}
const drawerWidth = 300;
const Menu: React.FC<MenuProps> = ({isMenuOpen= false, toggleMenu}) => {
    return (
        <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu} sx={{
            width:drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
            },
        }}>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}}>
                <Avatar>
                    <AccountCircleIcon/>
                </Avatar>
                <IconButton onClick={toggleMenu}>
                    <CloseIcon/>
                </IconButton>
            </div>
            <Divider/>
            <List>
                <ListItem button>
                    <ListItemText primary="Профиль"/>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Настройки"/>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem button>
                    <ListItemText primary="Выйти"/>
                </ListItem>
            </List>
            <Divider/>
            <div style={{marginTop: 'auto', marginLeft: 'auto', padding: 15}}>
                <NightModeToggle/>
            </div>
        </Drawer>
    );
};

export default Menu;