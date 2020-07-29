
import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class UserDetails extends Component {
   
  state = {
    user: []
    }
  
  componentDidMount = () => {
     axios.get("/api/users/" + this.props.match.params.id)
    .then(userObject => {
      console.log(userObject)
      this.setState({
        user: userObject.data
      }) 
     } )
  }

  render(){
 
    console.log(this.props)
    
    if (this.state.user) {
        return <div>
          {/* <Navbar />  */}
          <h3>{this.state.user.name}</h3>
          <p>{this.state.thread.picture}</p>
          <p>{this.state.thread.email}</p>
        </div>
    }
  }
}

export default UserDetails;
