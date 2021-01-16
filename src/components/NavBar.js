import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions/logOut'

const NavBar = (props) => {

  const isLoggedIn = !!props.user.id

  if (isLoggedIn) {
    return(
      <div className="Welcome">
        <h2>Welcome, {props.user.attributes.name}!</h2>
        <div className="nav">
          <NavLink exact activeClassName="active" className="nav-link" to="/bebes">my bébés</NavLink>
          <NavLink exact activeClassName="active" className="nav-link" to="/settings">my profile</NavLink>
          <NavLink exact className="nav-link" to="/logout" onClick={() => props.logOut()}>log out</NavLink>
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

export default connect(null, { logOut })(NavBar)
