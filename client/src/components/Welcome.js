import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Welcome extends Component {
  render() {
    return (

      <> 

   
      <div className="welcome-page">
        <div className="welcome-picture"></div>
       <div className="welcome-text">
      <h1>Live in Berlin?</h1> 
       <h2>Sign up to get help from native German speakers</h2>
      


     <div className="welcome-signup">
     <ul>

      <li><Link to='/Login'>Log In</Link></li>
      <li><Link to='/Signup'>Signup as Newcomer</Link></li>
      <li><Link to='/Signup'>Signup as Local</Link></li>

      </ul>
      </div>

 
      </div> 
     
    </div> 

      </>
    )
  }
}