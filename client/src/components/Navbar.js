import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/Home'>Home</Link></li>
        <li><Link to='/Profile'>Profile</Link></li>
        <li><Link to='/Threads'>Postboard</Link></li>
      </ul>
    </nav>
  )
}
export default Navbar;