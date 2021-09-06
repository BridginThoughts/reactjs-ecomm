import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';
import { useSelector, useDispatch } from 'react-redux';

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { productId } = useParams();
    const { image, title, price, category, description } = product
    const dispatch = useDispatch();
    console.log(product)
    console.log(`Productid:${productId}`)
    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log("Error:", err)
        })
        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails()
        return ()=>{
            dispatch(removeSelectedProduct())
        }
    }, [productId])
    return (
        <div className="container">
            {Object.keys(product).length === 0 ?
                <div className="loading">loading</div>
                :
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row p-3">
                            <div className="preview col-md-6">
                                <img className="img-fluid p-5" src={image} alt={title} />
                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{title}</h3>
                                <h5 className="category text-muted">Category: {category}
                                </h5>

                                <p className="product-description py-3">{description}</p>
                                <h4 className="price text-light bg-success d-inline-block p-2 mb-3 rounded-lg">Price: <span>${price}</span></h4>
                                

                                <div className="action">
                                    <button className="add-to-cart btn btn-primary btn-lg" type="button">add to cart</button>
                                    <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}

export default ProductDetails
