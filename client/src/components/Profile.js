import React from 'react'
import axios from 'axios'; 
//import User from '../../../models/User';
import Navbar from './Navbar'


export default class Profile extends React.Component {
 

  state = {
    user: this.props.user
  }
    setUser = user => {
    this.setState({
      user: user
    })
  }
 render(){

  return (
    <>
    <Navbar user={this.state.user} setUser={this.setUser}/>
    <div> 
        <h1>Welcome to the Profile, {this.props.user.username} </h1>
 
    </div>
    </>
  )
 }
  

}

 