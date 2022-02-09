import {Fragment} from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";

export default function Header() {
    return (
        <Fragment>
            <AppBar position='static' sx={{mb: 4}}>
                <Toolbar>
                    <Typography variant='h6'>
                        S-Kart
                    </Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}
