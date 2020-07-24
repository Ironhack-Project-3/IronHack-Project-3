import React, { Component } from 'react'; 
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home.js';
import Profile from './components/Profile';
import Navbar from './components/Navbar'
import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';
import UserDetails from './components/users/UserDetails'

import AddThread from './components/threads/AddThread';
import ThreadList from './components/threads/ThreadList';
import ThreadDetails from './components/threads/ThreadDetails'

class App extends Component {

  render() {
  return(
    <div className="app">
        <BrowserRouter>
        <Navbar />    
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/profile" render={() => <Profile />} />
            <Route exact path="/users" component={UserList}/>
          <Route exact path="/users/:id" component={UserDetails} />

          <Route exact path="/threads" component={ThreadList}/>
          <Route exact path="/threads/:id" component={ThreadDetails} />
          </Switch>
        </BrowserRouter> 
    </div>
  );
}
}


export default App;
 