import axios, { Axios } from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

////////////////////////////////////////////////////
//  UPDATE AUTHOR VIEW
////////////////////////////////////////////////////

const UpdateAuthorView = () => {
    // //// FIELDS /////////////////////////////////
    const [name, setName] = useState("");
    const [cancelName, setCancelName] = useState("");
    const { id } = useParams();
    const history = useHistory();
    const [errors, setErrors] = useState([]);

    // //// GET AUTHOR FROM API ////////////////////
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                setName(res.data.author.name);
                setCancelName(res.data.author.name);
            })
            .catch(err => console.log("🛑🛑🛑 Error Retrieving 🛑🛑🛑"))
    }, [])

    // //// SUBMIT UTILITY /////////////////////////

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/authors/update/" + id, { name })
            .then(res => {
                console.log(res);
                history.push("/authors/" + id + "/retrieve");
            })
            .catch(err => {
                console.log("🛑🛑🛑 Caught Error, err.reponse.data:", JSON.stringify(err.response.data));
                const errorResponse = err.response.data.errors;
                // setErrors(errorResponse);
                const errorArray = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArray.push(errorResponse[key].message);
                }
                setErrors(errorArray);
            })
    }

    // //// ON CHANGE UTILITY //////////////////////

    const handleChangeName = (e) => {
        const inputLength = e.target.value.length;
        if (inputLength <3 && inputLength>0) {
            setErrors(["name must be at least 3 characters in length"])
        } else {
            setErrors([]);
        }
        if (inputLength !== 0 ){
            setName(e.target.value);
        }
    }

    // //// OUTPUT /////////////////////////////////
    return (
        name
            ? <div >
                <h2>Update Author 📝:</h2>
                {/* <p>Errors: {JSON.stringify(errors)}</p> */}
                {/* **** Show Errors ******** */}
                {
                    errors
                        ? errors.map((error, idx) =>
                            <p key={idx} className='text-danger text-center bg-warning'>
                                <strong>{error}</strong>
                            </p>)
                        : <p className='bg-info'><strong>&nbsp;</strong></p>
                }
                {/* **** Form ******** */}
                <form onSubmit={e => handleSubmit(e)} >
                    <div className="form-group mb-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control"
                            id="name"
                            value={name}
                            onChange={e => handleChangeName(e)}
                        />
                    </div>
                    <div className='row mt-2 align-items-center'>
                        <div className='col'>
                            <p className='btn btn-secondary round-btn' onClick={e => setName(cancelName)}>
                                <strong>❌ Cancel</strong>
                            </p>
                        </div>
                        <div className='col'>
                            <button type="submit" class="btn btn-warning mt-2 round-btn col">
                                <strong>✍🏼 Edit Product</strong>
                            </button>
                        </div>
                    </div>
                </form>
            </div >
            : <div>Loading Product {id} Update ⌛ ⏳ ⏳</div>
    );
};

export default UpdateAuthorView;