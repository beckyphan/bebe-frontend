import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {

  const isLoggedIn = !!props.user.id

  if (isLoggedIn) {
    return(
      <div className="Welcome">
        <h2>Welcome, {props.user.attributes.name}!</h2>
        <div className="nav">
          <NavLink exact activeClassName="active" to="/bebes">My Bébés</NavLink>
        </div>
      </div>
    )
  } else {
    return (
      <div className="nav">
           <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
           <NavLink exact activeClassName="active" className="nav-link"  to="/register">Register</NavLink>
      </div>
    )
  }
}

export default NavBar
