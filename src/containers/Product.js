import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Product = () => {
    const products = useSelector(state => state.allProducts.products)
    //const { id, title } = products[0]
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product
        return (
            <div className="col-md-12" key={id}>
                <Link to={`/product/${id}`} className="product">
                    <img className="img-fluid product__img " src={image} alt={title} />
                    <div className="product__body">
                        <h5 className="card-title product__title">
                            {title}
                        </h5>
                        <div className="meta price product__price">${price}</div>
                        <div className="meta product__cat">{category}</div>
                    </div>
                    <div className="clearfix"></div>
                </Link>
            </div>

        )

    })

    return (
        <>
            {renderList}
        </>

    )
}

export default Product
