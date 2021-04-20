import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';
const Update = (props) => {
    const { id } = props;
    // const [title, setTitle] = useState();
    // const [description, setDescription] = useState();
    // const [price, setPrice] = useState();
    // refactored code
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect (() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                // setTitle(res.data.title);
                // setDescription(res.data.description);
                // setPrice(res.data.price);
                // refactored code
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])

    // const updateProduct = (e) => {
    //     e.preventDefault();
    //     console.log("in update.js")
    //     axios.put('http://localhost:8000/api/products/' + id, {
    //         title,
    //         description,
    //         price
    //     })
    //     .then(res => {
    //         console.log(res);
    //         navigate("/products")
    //     });
    // }
    // refactored code
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/product/' + id, product)
            .then(res => {
                console.log(res);
                navigate("/products")
            });
    }
    

    return(
        <div>
            <h1>Edit Product</h1>
            {/* <form onSubmit = {updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} />
                </p>
                <input type="submit" >
                </input>
            </form> */}
            {/* refactored code */}
            {loaded && (
                <>
                <ProductForm 
                    onSubmitProp={updateProduct}
                    initialTitle={product.title}
                    initialDescription={product.description}
                />
                <DeleteButton productId = {product._id} successCallBack = {() => navigate('/')} />
                </>
            )}
        </div>
    )
}

export default Update;