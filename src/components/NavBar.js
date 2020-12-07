import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {

  const isLoggedIn = !!props.user.id

  if (isLoggedIn) {
    return(
      <div className="nav">
        Welcome, {props.user.attributes.name}!
      </div>
    )
  } else {
    return (
      <div className="nav">
           <NavLink exact activeClassName="active" to="/login">Login</NavLink>
           <NavLink exact activeClassName="active" to="/register">Register</NavLink>
      </div>
    )
  }
}

export default NavBar
