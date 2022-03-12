import {Fragment, useEffect} from "react";
import ProductList from "./ProductList";
import LoadingComponent from "../../App/layout/LoadingComponent";
import {useAppDispatch, useAppSelector} from "../../App/store/ConfigureStore";
import {fetchProductsAsync, productSelectors} from "./catalogSlice";

export default function Catalog() {
    const products = useAppSelector(productSelectors.selectAll);
    const {productsLoaded, status} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [dispatch, productsLoaded])

    if (status.includes('pending')) return <LoadingComponent message='Loading products...'/>

    return (
        <Fragment>
            <ProductList products={products}/>
        </Fragment>
    )
}