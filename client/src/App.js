import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Switch, Route, } from 'react-router-dom';
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

          {/* <Switch> */}
            <Route exact path="/" component={Welcome}/>
            
           
            <Route exact path="/Signup" render={props => <Signup setUser={this.setUser} {...props} />} />
            <Route exact path='/Login' render={(props) => <Login setUser={this.setUser} {...props}/>} />
            <Route exact path="/Home" render={() => <Home />} />
            {/* <Route exact path="/profile" render={() => this.state.user ? <Profile /> : <Redirect to='/' />}/> */}
            <Route exact path="/users" component={UserList}/>
            <Route exact path="/profile" render={(props) => <Profile user={this.state.user} setUser={this.setUser} {...props} />} />
            <Route exact path="/users/:id" component={UserDetails} /> 
            <Route exact path="/threads" render={(props) => <ThreadList user={this.state.user} {...props} />}/>
            <Route exact path="/threads/:id" component={ThreadDetails} />             
          {/* </Switch> */}

    </div>
  );
}
}


export default App;
 