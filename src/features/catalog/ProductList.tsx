import {Grid} from "@mui/material";
import { Fragment } from "react";
import {Product} from "../../App/models/products";
import ProductCard from "./ProductCard";
import {useAppSelector} from "../../App/store/ConfigureStore";
import ProductCardSkeleton from "./ProductCardSkeleton";

interface Props {
    products: Product[];
}

export default function ProductList({products} : Props) {
    const {productsLoaded} = useAppSelector(state => state.catalog);
    return (
        <Fragment>
            <Grid container spacing={4}>
                {products.map(product => (
                    <Grid item xs={4} key={product.id}>
                        {!productsLoaded ? (
                            <ProductCardSkeleton />
                        ) : (
                            <ProductCard product={product}/>
                        )}
                    </Grid>
                ))}
            </Grid>
        </Fragment>
    )
}