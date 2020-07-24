import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Welcome extends Component {
  render() {
    return (
      <ul>
        <li><Link to='/Login'>Login</Link></li>
        <li><Link to='/Signup'>Signup</Link></li>
      </ul>
    )
  }
}
