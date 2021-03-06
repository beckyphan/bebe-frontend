import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/Home'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import BebesContainer from './components/BebesContainer'
import ABebeContainer from './components/ABebeContainer'
import UserContainer from './components/UserContainer'
import DeleteAccount from './components/DeleteAccount'

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
          <Route exact path='/bebes/:id' render={props => {
              if (!this.props.user.id) {
                return <Redirect to='/' />
              } else {
                return <ABebeContainer user={this.props.user} bebes={this.props.bebes} {...props} />
              }
            }
          } />
          <Route exact path='/bebes'>
            { !!this.props.user.id ? <BebesContainer />: <Redirect to='/' />}
          </Route>
          <Route exact path='/deleteaccount'>
            { !!this.props.user.id ? <DeleteAccount />: <Redirect to='/'/>}
          </Route>
          <Route exact path='/settings'>
            { !!this.props.user.id ? <UserContainer />: <Redirect to='/' />}
          </Route>
          <Route exact path='/logout'>
            <Redirect to='/' />
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

export default connect(mapStateToProps)(App);
