import React from 'react';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {

  state = {
    username: ''
    password: ''
  }

  handleSubmit = () {
    event.preventDefault()
    console.log("loginFormSubmitted")
  }

  handleChange = (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div class='login'>
        <form onSubmit={this.handleSubmit}>
        <label>Username: </label>
        <input type='text' value={this.state.username} name='username' onChange={this.handleChange}></br>
        <input type='password' value={this.state.password} name='password' onChange={this.handleChange}></br>
        <input type='submit'>
        </form>
      </div>
    )
  }

}
