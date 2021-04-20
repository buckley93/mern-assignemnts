import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
const ProductForm = (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = e => {
        // axios.post('http://localhost:8000/api/createProduct', {
        //     title,
        //     price,
        //     description
        // })
        //     .then(res=>{
        //         console.log(res);
        //         navigate('/products');
        //     })
        //     .catch(err=>console.log(err))
        // Refactored code
        e.preventDefault();
        onSubmitProp({title, price, description});
        console.log("we are in the product form")
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text"
                name="title"
                value={title}
                onChange = {(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" 
                name="price"
                value={price}
                onChange = {(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" 
                name="description"
                value={description}
                onChange = {(e) => setDescription(e.target.value)} />
            </p>
            <input type="submit" />
        </form>
    )
}

export default ProductForm;