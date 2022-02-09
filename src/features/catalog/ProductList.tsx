import {Grid} from "@mui/material";
import { Fragment } from "react";
import {Product} from "../../App/models/products";
import ProductCard from "./ProductCard";

interface Props {
    products: Product[];
}

export default function ProductList({products} : Props) {
    return (
        <Fragment>
            <Grid container spacing={4}>
                {products.map(product => (
                    <Grid item xs={3} key={product.id}>
                        <ProductCard product={product}/>
                    </Grid>
                ))}
            </Grid>
        </Fragment>
    )
}