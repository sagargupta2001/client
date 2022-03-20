import {Fragment, useEffect} from "react";
import ProductList from "./ProductList";
import LoadingComponent from "../../App/layout/LoadingComponent";
import {useAppDispatch, useAppSelector} from "../../App/store/ConfigureStore";
import {fetchFilters, fetchProductsAsync, productSelectors} from "./catalogSlice";
import { Grid } from "@mui/material";

export default function Catalog() {
    const products = useAppSelector(productSelectors.selectAll);
    const {productsLoaded, status, filtersLoaded} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded, dispatch])

    useEffect(() => {
        if (!filtersLoaded) dispatch(fetchFilters());
    }, [dispatch, filtersLoaded])

    if (status.includes('pending')) return <LoadingComponent message='Loading products...'/>

    return (
        <Grid container spacing={4}>
            <Grid item xs={3}>

            </Grid>
            <Grid item xs={9}>
                <ProductList products={products}/>
            </Grid>
        </Grid>
    )
}