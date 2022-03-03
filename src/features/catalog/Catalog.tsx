import {Fragment, useEffect, useState} from "react";
import {Product} from "../../App/models/products";
import ProductList from "./ProductList";
import agent from "../../App/api/agent";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        agent.Catalog.list().then(products => setProducts(products))
    }, [])

    return (
        <Fragment>
            <ProductList products={products}/>
        </Fragment>
    )
}