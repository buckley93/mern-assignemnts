import React, { useState } from 'react';
import axios from 'axios';
const ProductForm = () => {
    const [ Title, setTitle] = useState("");
    const [ Price, setPrice] = useState(0);
    const [ Description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/createProduct', {
            Title,
            Price,
            Description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    return(
        <form onSubmit={ onSubmitHandler }>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange = {(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange = {(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = {(e) => setDescription(e.target.value)} />
            </p>
            <input type="submit" />
        </form>
    )
}

export default ProductForm;