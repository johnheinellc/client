import React, { useState, useEffect } from "react";
import axios from "axios"
import {Link } from "react-router-dom";
import {useParams} from "react-router";


const DisplayAuthors = (props) => {

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(response => {
                console.log(response);
                setAuthors(response.data.authors);
            }).catch(err => {
                console.log(err);
            });
    }, [props.updateForm])

    let [authors, setAuthors] = useState([])
    const {_id} = useParams();


    const deleteProd = (prodId)=>{
        axios.delete(`http://localhost:8000/api/authors/delete/${prodId}`)
            .then(response => {
                console.log("deleting",response);
                let filteredList = authors.filter((authorObj)=>{
                    return authorObj._id !== prodId
                })
                setAuthors(filteredList)
            }).catch(err => {
                console.log(err);
            });
    }



    return (
        <div>
            <h1>Displaying all Authors:</h1>
            <Link to={"/new"} className="btn btn-outline-success btn-md my-3">Add New Author</Link>
            <br/>
            <h6 className="text-muted">~Click author name to view~</h6>
            {
                authors.map((authorObj) => {
                    return (
                        <div className="card bg-secondary mb-4" key={authorObj._id}>
                            <div className="card-body">
                                <h2 className="card-title mb-3"><Link to={`/details/${authorObj._id}`} className="authorName" >{authorObj.name}</Link></h2>
                                <Link to={`/edit/${authorObj._id}`} className="btn btn-success btn-md">Edit {authorObj.name}</Link>
                                <button onClick={()=>{deleteProd(authorObj._id)}} className="btn btn-outline-dark mx-3">Delete</button>
                            </div>
                        </div>

                )})

        }
        </div>
    );
};

export default DisplayAuthors;