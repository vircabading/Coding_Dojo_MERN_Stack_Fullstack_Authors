import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

////////////////////////////////////////////////////
//  DELETE AUTHOR COMPONENT
////////////////////////////////////////////////////

const DeleteAuthorComp = () => {
    // //// FIELDS /////////////////////////////////
    const { id } = useParams();
    const history = useHistory();

    console.log("******* IN DELETE **********");

    // //// DELETE FROM DATABASE ///////////////////
    axios.delete("http://localhost:8000/api/authors/delete/" + id)
        .then(res => console.log(res))
        .then(() => history.push("/authors"))
        .catch(err => console.log(err));

    return <div>Delete Product Component | id: { id }</div>;
};

export default DeleteAuthorComp;