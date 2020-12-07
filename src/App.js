import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar user={this.props.user}/>
        <Switch>
          <Route exact path='/login' component={ LoginForm }/>
          <Route exact path='/register' component={ RegistrationForm }/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // access things in our store as this.props
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(App);
