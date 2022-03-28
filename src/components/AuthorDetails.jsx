
import {useParams} from "react-router";
import React, { useState, useEffect } from "react";
import axios from "axios"
import {Link , useHistory} from "react-router-dom";


const AuthorDetail =()=>{

    const {_id} = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(response => {
                console.log(response);
                setAuth(response.data.author);
            }).catch(err => {
                console.log(err);
            });
    }, [])
    let [auth, setAuth] = useState([])

    const deleteAuth = (authId)=>{
        axios.delete(`http://localhost:8000/api/authors/delete/${_id}`)
        .then(response => {
            console.log(response);
            history.push('/')
        }).catch(err => {
            console.log(err);
        });
    }



    return (
        <>
        <div className="card bg-secondary mb-4" key={_id}>
            <div className="card-body">
                <h2 className="card-title mb-3 authorNameFixed">{auth.name}</h2>
                <Link to={`/edit/${_id}`} className="btn btn-success btn-md mx-3">Edit {auth.name}</Link>
                <button onClick={deleteAuth} className="btn btn-outline-dark mx-3">Delete</button>
            </div>
        </div>
        <br></br>
        <div>
        <Link to="/" type="button" className="btn btn-outline-success btn-lg mb-4">Back</Link>
        </div>
    </>
)};

export default AuthorDetail;