import {Fragment} from "react";
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import { Product } from "../../App/models/products";
import {Link} from "react-router-dom";
import {LoadingButton} from "@material-ui/lab";
import {currencyFormat} from "../../App/util/util";
import {useAppDispatch, useAppSelector} from "../../App/store/ConfigureStore";
import {addBasketItemAsync} from "../basket/basketSlice";

interface Props {
    product: Product;
}

export default function ProductCard({product}: Props) {
    const {status} = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();

    return (
        <Fragment>
            <Card>
                <CardHeader
                    avatar={
                    <Avatar sx={{bgcolor: 'secondary.main'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                    }
                    title={product.name}
                    titleTypographyProps={{
                        sx: {fontWeight: 'bold', color: 'primary.main'}
                    }}
                />
                <CardMedia
                    sx={{height: 140, backgroundSize: 'contain', bgcolor: 'primary.light'}}
                    image={product.pictureUrl}
                    title={product.name}
                />
                <CardContent>
                    <Typography gutterBottom color='secondary' variant="h5">
                        {currencyFormat(product.price)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.brand} / {product.type}
                    </Typography>
                </CardContent>
                <CardActions>
                    <LoadingButton
                        loading={status.includes('pendingAddItem' + product.id)}
                        onClick={() => dispatch(addBasketItemAsync({productId: product.id}))}
                        size="small">Add to cart
                    </LoadingButton>
                    <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
                </CardActions>
            </Card>
        </Fragment>
    )
}