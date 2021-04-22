import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Detail = (props) => {
    const [author, setAuthor] = useState({})
    useEffect(() => {
        axios.get('http://localhost/api/authors' + props.authorId)
            .then(res => setAuthor({
                ...res.data
            }))
    }, [])

    return(
        <div>
            <p>Name: {author.name}</p>
        </div>
    )
}

export default Detail;