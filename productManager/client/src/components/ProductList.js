import React from 'react';
const ProductList = (props) => {
    return (
        <div>
            <h2>All Products</h2>
            {props.product.map((product, index) => {
                return (
                    <div>
                        <a href={'/products/' + product._id} key={index}> {product.Title} </a>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;