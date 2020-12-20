import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/Home'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import BebesContainer from './components/BebesContainer'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar user={this.props.user}/>
        <Switch>
          <Route exact path='/login'>
            { !!this.props.user.id ? <Redirect to='/bebes' />: <LoginForm />}
          </Route>
          <Route exact path='/register'>
            { !!this.props.user.id ? <Redirect to='/bebes' />: <RegistrationForm />}
          </Route>
          <Route exact path='/bebes'>
            { !!this.props.user.id ? <BebesContainer user={this.props.user} bebes={this.props.bebes}/>: <Redirect to='/' />}
          </Route>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // access things in our store as this.props
  return {
    user: state.user,
    bebes: state.bebes
  }
}

export default connect(mapStateToProps, null)(App);
