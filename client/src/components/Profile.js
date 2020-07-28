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
    
    <h1>Welcome to the Profile, {this.props.user.username} </h1>
    <div className="profile-page">  
    <div className="profile-info">
        <h1>Your Profile</h1>
        <ul>
          <li>Username: {this.props.user.username} </li>
          <li>Email: {this.props.user.email} </li>
          <li>Name: {this.props.user.name} </li>
          <li>Age: {this.props.user.age}</li>
          <li>Skills: {this.props.user.skills}</li>
          <li>Bio: {this.props.user.bio}</li>
        </ul>
        </div>
    </div>
    </>
  )
 }
  
}
    

 