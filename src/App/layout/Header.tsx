import {Fragment} from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";
import MUISwitch from "./MUISwitch";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange}: Props) {
    return (
        <Fragment>
            <AppBar position='static' sx={{mb: 4}}>
                <Toolbar>
                    <Typography variant='h6'>
                        S-Kart
                    </Typography>
                    <MUISwitch onChange={handleThemeChange} checked={darkMode} />
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}
