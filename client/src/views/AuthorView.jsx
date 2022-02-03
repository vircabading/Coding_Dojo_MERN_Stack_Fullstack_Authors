import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

////////////////////////////////////////////////////
//  AUTHOR VIEW
////////////////////////////////////////////////////

const AuthorView = () => {
    // //// FIELDS ////////////////////////////////
    const { id } = useParams();
    const [author, setAuthor] = useState({});

    console.log("****** IN VIEW ******");

    // //// GET AUTHOR FROM API //////////////////
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(response => setAuthor(response.data.author))
            .catch(error => {
                console.log("⚠⚠⚠ ERROR FOUND when looking for author ⚠⚠⚠")
            });
    }, []);

    // //// OUTPUT ////////////////////////////////
    return (
        author
            ? <div>
                <h2>Author ✍🏼:</h2>
                <hr />
                <p>{JSON.stringify(author)}</p>
                <p>
                    <strong>Name: </strong>{author.name}
                </p>
                <p>
                    <strong>Age: </strong>{ author.age }
                </p>
                <p>
                    <strong>Genre: </strong>{author.genre }
                </p>
                <p>
                    <strong>Classic: </strong>{ JSON.stringify(author.classic) }
                </p>
                <hr />
                <div className='row'>
                    <Link className='col'
                        to={"/authors/" + author._id + "/update"}>
                        <button className='btn btn-sm btn-warning round-btn' >
                            <strong>✍🏼 Edit</strong>
                        </button>
                    </Link>
                    <Link className='col'
                        to={"/authors/" + author._id + "/delete"} >
                        <button className='btn btn-sm btn-danger round-btn'>
                            <strong>🧨 Delete</strong>
                        </button>
                    </Link>
                </div>
            </div>
            : <div>Loading ⌛ ⏳ ⏳</div>
    )
}

export default AuthorView