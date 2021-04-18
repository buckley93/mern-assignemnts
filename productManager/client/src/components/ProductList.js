import React from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const ProductList = (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res=>{
                removeFromDom(productId);
            })
    }
    return (
        <div>
            <h2>All Products</h2>
            {props.product.map((product, index) => {
                return (
                    <div>
                        <a href={'/products/' + product._id} key={index}> {product.title} </a>
                        |
                        <Link to = {'/products/' + product._id + '/edit'}>
                             Edit
                        </Link>
                        |
                        <button onClick={(e) => {deleteProduct(product._id)}}>
                            Delete
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;