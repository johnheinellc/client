import {useParams} from "react-router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const EditAuthor = ()=> {

    const {_id} = useParams();
    const history = useHistory();

    let [authInfo, setAuthInfo] = useState({});
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
        .then(response=>{
            console.log(" YOOOOOO EDIT...",response);
            setAuthInfo(response.data.author)
        })
        .catch(err=>{
            console.log('Something went wrong', err )
            })
        }
    , [])

    const editAuthor =(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${_id}`, authInfo)
        .then(response=>{
            console.log("updating",response)
            history.push('/')
        })
        .catch(err=>{
            console.log('Something went wrong', err )
            })

    }

    const changeHandler=(e)=>{
        // e.target.name  e.target.value 
        setAuthInfo({
            ...authInfo,
            [e.target.name] : e.target.value
        })


    }


    return (
        <>
        <form onSubmit={editAuthor}>
            <div className="form-group">
                <label htmlFor="">Author Name:</label>
                <input type="text" className="form-control" onChange={changeHandler} name="name" value={authInfo.name}/>
                {authInfo.name?.length < 3 && authInfo.name?.length >0 ? <p>Must be at least 3 characters</p> : null}
                </div>
                <input type="submit" value="Submit Edit" className="btn btn-outline-success btn-md my-3" />
        </form>
        </>
    )
}


export default EditAuthor;
