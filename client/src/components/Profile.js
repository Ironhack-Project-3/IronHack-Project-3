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

// export default function Profile(props) {
  
  return (

    <>
    <Navbar  user={this.state.user} setUser={this.setUser}/>
    <div className="profile-page">  
    <div className="profile-info">
        <h1>Welcome, {this.props.user.username}</h1>
        <ul>
          <li>Username: {props.user.username} </li>
          <li>Email: {props.user.email} </li>
          <li>Name: {props.user.name} </li>
          <li>Age: {props.user.age}</li>
          <li>Skills: {props.user.skills}</li>
          <li>Bio: {props.user.bio}</li>
        </ul>
        </div>
    </div>
    </>
  )
 }
  
}

    

 