import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorList from '../components/AuthorList';
import { Link } from '@reach/router';

const Main = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res=> {
                console.log("in the useEffect in the Main.js");
                setAuthors(res.data);
                setLoaded(true);
            })
    }, []);
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._Id !== authorId));
    }
    return(
        <div>
            <h1>All Authors</h1>
            <Link to = {"/new"}>
                Add an Author
            </Link>
            {loaded && < AuthorList authors={authors} removeFromDom={removeFromDom}/> }
        </div>
    )
}

export default Main;