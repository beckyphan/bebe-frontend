import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/login' component={ LoginForm }/>
        </Switch>
      </div>
    )
  }
}

export default App;
