import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Product = () => {
    const products = useSelector(state => state.allProducts.products)
    //const { id, title } = products[0]
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product
        return (
            <div className="col-md-4" key={id}>
                <Link to={`/product/${id}`}>
                <div className="card">
                    <img className="img-fluid" src={image} alt={title} />
                    <div className="card-body">
                        <h5 className="card-title">
                            {title}
                        </h5>
                        <div className="meta price">${price}</div>
                        <div className="meta">{category}</div>
                    </div>
                </div>
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
