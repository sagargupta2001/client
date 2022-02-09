import {Fragment, useEffect, useState} from "react";
import {Product} from "../../App/models/products";
import ProductList from "./ProductList";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://localhost:44335/api/Products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Fragment>
            <ProductList products={products}/>
        </Fragment>
    )
}