import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { Route, Redirect } from 'react-router-dom';
import Home from './components/Home.js';
import Profile from './components/Profile';
import Navbar from './components/Navbar'
import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';
import UserDetails from './components/users/UserDetails'
import Welcome from './components/Welcome'
import Signup from './components/Signup'
import Login from './components/Login';
import AddThread from './components/threads/AddThread';
import ThreadList from './components/threads/ThreadList';
import ThreadDetails from './components/threads/ThreadDetails'
import ProtectedRoute from './components/ProtectedRoute';



class App extends React.Component {

  state = {
    user: this.props.user
  }
    setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
    console.log("app user", this.state.user)
   return(
    <div className="app">

          <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/Signup" render={props => <Signup setUser={this.setUser} {...props} />} />
            <Route exact path='/Login' render={(props) => <Login setUser={this.setUser} {...props}/>} />
            <ProtectedRoute
              exact path='/Home'
              
              user={this.state.user}
              component={Home}
            />
            <Route exact path="/users" component={UserList}/>
            <ProtectedRoute
              exact
              path='/profile'
              // this is an additional prop that is taken care of with ...rest
              setUser={this.setUser}
              user={this.state.user}
              component={Profile}
            />
            {/* <ProtectedRoute exact path="/profile" component={Profile} render={(props) => <Profile user={this.state.user} setUser={this.setUser} {...props} />} /> */}
            <Route exact path="/users/:id" component={UserDetails} /> 
            <Route exact path="/threads" render={(props) => <ThreadList user={this.state.user} {...props} />}/>
            <Route exact path="/threads/:id" component={ThreadDetails} />             
          </Switch>

      </div>
    );
  }
}


export default App;
 