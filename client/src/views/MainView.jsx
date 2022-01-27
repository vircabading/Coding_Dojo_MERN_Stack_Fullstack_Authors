import React from 'react'
import { Redirect, Link, Route } from 'react-router-dom';

import Home from './HomeView';
import CreateAuthorView from './CreateAuthorView';
import AuthorView from './AuthorView';
import UpdateAuthorView from './UpdateAuthorView';
import DeleteAuthorComp from '../components/DeleteAuthorComp';

////////////////////////////////////////////////////
//  MAIN VIEW
////////////////////////////////////////////////////

/**
 * MAIN VIEW
 * @returns HTML for Main Body
 */
const Main = () => {
    // //// OUTPUT /////////////////////////////////
    return (
        <main role="main">
            <div className='container mt-4'>
                <div className='row bg-info p-3 round'>
                    <div className="col">
                        {/* **** Home Route ******** */}
                        <Route exact path="/authors">
                            <Home />
                        </Route>
                        {/* **** Create Author Route ******** */}
                        <Route exact path="/authors/create" >
                            <CreateAuthorView />
                        </Route>
                        {/* **** Retrieve Author Route ******** */}
                        <Route path="/authors/:id/retrieve">
                            <AuthorView />
                        </Route>
                        {/* **** Update Author Route ******** */}
                        <Route path="/authors/:id/update">
                            <UpdateAuthorView />
                        </Route>
                        {/* **** Delete Author Route ******** */}
                        <Route path="/authors/:id/delete">
                            <DeleteAuthorComp />
                        </Route>
                        {/* **** Root Re-Directs to Home Route ******** */}
                        <Route exact path="/">
                            <Redirect to="/authors" />
                        </Route>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main