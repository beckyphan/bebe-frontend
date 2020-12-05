import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {

  return (
    <div className="nav">
       <NavLink exact activeClassName="active" to="/login">Login</NavLink>
    </div>
  )
}

export default NavBar
