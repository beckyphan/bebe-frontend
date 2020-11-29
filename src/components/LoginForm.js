import React from 'react';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("loginFormSubmitted")
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit} class='login'>
          <label>Username: </label>
          <input type='text' value={this.state.username} name='username' onChange={this.handleChange} /><br/>
          <label>Password: </label>
          <input type='password' value={this.state.password} name='password' onChange={this.handleChange} /><br/>
          <input type='submit' />
        </form>
    )
  }

}

export default LoginForm;
