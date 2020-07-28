import React from 'react';
import { Link } from 'react-router-dom';
import {logout} from '../services/auth'
const Navbar = (props) => {

  const  handleLogout= props=>{
    logout().then(()=>{
      props.setUser(null)
    })
  }
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/Profile'>Profile</Link></li>
        <li><Link to='/Threads'>Postboard</Link></li>
    <li><Link to='/' onClick={()=>handleLogout(props)}>Logout</Link></li>
      </ul>
    </nav>
  )
}
export default Navbar;