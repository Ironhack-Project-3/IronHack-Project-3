import React from 'react'
import axios from 'axios'; 
//import User from '../../../models/User';
import Navbar from './Navbar'


export default function Profile(props) {

  //const {username} = User;
(console.log(props.user.username))

  return (
    <>
    <Navbar/>
    <div> 
        <h1>Welcome to the Profile, {props.user.username} </h1>
 
    </div>
    </>
  )
}

 