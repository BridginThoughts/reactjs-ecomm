import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Product from './Product'
import axios from 'axios'
import { setProducts } from '../redux/actions/productActions'

const ProductListing = () => {
    const products = useSelector(state => state)
    const dispatch = useDispatch();
    
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Error", err);
            })
       dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    console.log("Products:",products)
    return (
        <div className="container">
            <div className="row">
            <Product />
            </div>
        </div>
    )
}

export default ProductListing
