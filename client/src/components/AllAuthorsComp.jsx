import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

////////////////////////////////////////////////////
//  ALL AUTHORS COMPONENT
////////////////////////////////////////////////////

const AllAuthors = () => {
    const [authors, setAuthors] = useState("")

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log("*** In axios get /api/authors *** res.data.authors:", JSON.stringify(res.data.authors));
                setAuthors(res.data.authors);
            })
    }, []);

    return (
        authors
            ? <div>
                {/* <p>Authors: {JSON.stringify(authors)}</p> */}
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Author</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors.map((author, idx) => <tr key={idx}>
                                <th scope="row" >{idx + 1}</th>
                                <td >{author.name}</td>
                                <td className='row'>
                                    <Link to={"/authors/" + author._id + "/retrieve"} className='col'>
                                        <button className='btn btn-sm btn-primary round-btn'>View</button>
                                    </Link>
                                    <Link to={"/authors/" + author._id + "/update"} className='col'>
                                        <button className='btn btn-sm btn-warning round-btn'>Edit</button>
                                    </Link>
                                    <Link to={"/authors/" + author._id + "/delete"} className='col'>
                                        <button className='btn btn-sm btn-danger round-btn'>Delete</button>

                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>

            </div>
            : <div>Loading ⌛ ⏳ ⏳</div>
    );
};

export default AllAuthors;