import axios from "axios";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";


const MakeAuthors = (props)=> {

    let [name, setName] = useState ("")
    const history = useHistory();

    const submitAuthor =(e)=>{
        e.preventDefault();
        let formInfo = {name};

        axios.post("http://localhost:8000/api/authors/new",formInfo)
        .then(response=>{
            console.log(" YOOOOOOOOOOOOO...",response);
            // also in app.js file and displayAuthors.jsx
            props.setUpdateForm(!props.updateForm)

            setName("");
            history.push('/')

        })
        .catch(err=>{
            console.log('Something went wrong', err )
        })
    }

    return (
        <>
        <form onSubmit={submitAuthor}>
            <div className="form-group">
                <label htmlFor="">Name:</label>
                <input type="text" className="form-control" onChange={ (e) => setName(e.target.value)} value={name}/>
                {name.length < 3 && name.length >0 ? <p>Must be at least 3 characters</p> : null}
                </div>
                <input type="submit" value="Create" className="btn btn-outline-success btn-md my-3" />
        </form>
        {/* <p>Author Data:</p>
        <p>name: {name}</p> */}
        </>
    )
}

export default MakeAuthors;
