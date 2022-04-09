import {Fragment} from "react";
import {AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography} from "@mui/material";
import MUISwitch from "./MUISwitch";
import {Link, NavLink} from "react-router-dom";
import {ShoppingCart} from "@mui/icons-material";
import {useAppSelector} from "../store/ConfigureStore";
import SignedInMenu from "./SignedInMenu";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'}
]

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'}
]

const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'grey.400'
    }
}

export default function Header({darkMode, handleThemeChange}: Props) {
    const {basket} = useAppSelector(state => state.basket);
    const {user} = useAppSelector(state => state.account);
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Fragment>
            <AppBar position='static' >
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>

                    <Box display='flex' alignItems='center'>
                        <Typography
                            variant='h6'
                            component={NavLink}
                            to='/'
                            exact
                            sx={navStyles}>
                            S-Kart
                        </Typography>
                        <MUISwitch onChange={handleThemeChange} checked={darkMode}/>
                    </Box>

                    <List sx={{display: 'flex'}}>
                        {midLinks.map(({title, path}) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                    <Box display='flex' alignItems='center'>
                        <IconButton component={Link} to='/basket' size='large' sx={{color: 'inherit'}}>
                            <Badge badgeContent={itemCount} color='secondary'>
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                        {user ? (
                            <SignedInMenu/>
                        ) : (
                            <List sx={{display: 'flex'}}>
                                {rightLinks.map(({title, path}) => (
                                    <ListItem
                                        component={NavLink}
                                        to={path}
                                        key={path}
                                        sx={navStyles}
                                    >
                                        {title.toUpperCase()}
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}