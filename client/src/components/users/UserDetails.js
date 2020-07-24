
import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class UserDetails extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

  render(){
    return <div>Welcome to user details page!</div>
  }
}

export default UserDetails;
