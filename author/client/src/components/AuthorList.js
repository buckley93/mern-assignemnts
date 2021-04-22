import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const PersonList = (props) => {
    const { removeFromDom } = props;
    const deleteAuthor = (personId) => {
        axios.delete('http://localhost:8000/api/authors/' + personId)
            .then(res => {
                removeFromDom(personId);
                window.location.reload(false);
            })
    }
    return (
        <div>
            {props.authors.map((author, index) => {
                return <p key={index}>
                    {author.name} | <span>  </span>
                    <Link to={"/authors/" + author._id + "/edit"}>
                        Edit
                    </Link>
                    <span> | </span>
                    <button onClick={(e) => { deleteAuthor(author._id) }}>Delete</button>
                </p>
            })}
        </div>
    )
}

export default PersonList;