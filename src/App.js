import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MakeAuthor from './components/MakeAuthor';
import DisplayAuthors from './components/DisplayAuthors';
import AuthorDetails from './components/AuthorDetails';
import EditAuthor from './components/EditAuthor';


function App() {

  const [updateForm, setUpdateForm]= useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Authors</h1>
        <Switch>
          <Route exact path="/">
            
            <DisplayAuthors updateForm={updateForm}/>
          </Route>
          <Route exact path="/details/:_id">
            <AuthorDetails/>
          </Route>
          <Route exact path="/edit/:_id">
            <EditAuthor/>
          </Route>
          <Route exact path="/new">
          <MakeAuthor updateForm={updateForm} setUpdateForm={setUpdateForm}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
