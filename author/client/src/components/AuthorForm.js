import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const AuthorForm = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
            name
        })
            .then(res => {
                console.log(res);
                console.log("creating author in AuthorForm")
                navigate('/')
            })
            .catch(err => {
                console.log(err);
                console.log("error in your AuthorForm");
                const errorsResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorsResponse)) {
                    errorArr.push(errorsResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <h1> Add a new Author </h1>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Authors name: </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
            <button onClick={() => navigate('/')}>Cancel</button>
        </div>
    )
}

export default AuthorForm;