import {
    Button, Grid,
    Typography
} from "@mui/material";
import {Fragment} from "react";
import BasketSummary from "./BasketSummary";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../App/store/ConfigureStore";
import BasketTable from "./BasketTable";

export default function BasketPage() {
    const {basket} = useAppSelector(state => state.basket);

    if (!basket) return <Typography variant='h3'>Your basket is empty</Typography>

    return (
        <Fragment>
            <BasketTable items={basket.items} />
            <Grid container>
                <Grid item xs={6} />
                <Grid item xs={6} >
                    <BasketSummary />
                    <Button
                        component={Link}
                        to='/checkout'
                        variant='contained'
                        size='large'
                        fullWidth
                    >
                        Checkout
                    </Button>
                </Grid>
            </Grid>
        </Fragment>

    )
}