import React, { Component } from 'react';
import AddProject from './components/users/AddUser';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home.js';
import Profile from './components/Profile';
import Navbar from './components/Navbar'
import AddUser from './components/users/AddUser';

function App () {
  return(
    <div className="app">
        <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/profile" render={() => <Profile />} />
            <AddUser />
          </Switch>
        </BrowserRouter> 
    </div>
  );
}


export default App;
 