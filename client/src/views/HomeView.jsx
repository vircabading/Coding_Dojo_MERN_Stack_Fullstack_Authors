import React from 'react'
import { Link } from 'react-router-dom';
import AllAuthors from '../components/AllAuthorsComp';

////////////////////////////////////////////////////
//  HOME VIEW
////////////////////////////////////////////////////

/**
 * HOME VIEW
 * @returns HTML for A Welcome Banner and Display All Products
 */
const Home = () => {
    // //// OUTPUT //////////////////////////////////////////
    return (<div>
        <div className='d-flex flex-row justify-content-between align-items-center'>
            <h2>We have quotes by</h2>
            <Link to={"/authors/create"}>
                <button className='btn btn-success round-btn'>
                    <strong>➕ Add an Author</strong>
                </button>
            </Link>
        </div>
        <AllAuthors />
    </div>)
}

export default Home