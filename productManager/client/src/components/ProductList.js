import React, { useState, useEffect }from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from '../components/DeleteButton'

const ProductList = (props) => {
    // const { removeFromDom } = props;
    // const deleteProduct = (productId) => {
    //     axios.delete('http://localhost:8000/api/products/' + productId)
    //         .then(res=>{
    //             removeFromDom(productId);
    //         })
    // }
    // refactored code
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data));
    }, []);
    const removeFromDom = productId => {
        console.log("we are in the remove from dom")
        setProducts(products.filter(product => product._id !== productId));
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
                        <DeleteButton productId={product._id} successCallBack = {() => removeFromDom(product._id)}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;