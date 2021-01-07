import React from 'react';
import { connect } from 'react-redux'
import { registerUser } from '../actions/registerUser'

class RegistrationForm extends React.Component {

  state = {
    name: '',
    username: '',
    password: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.registerUser(this.state)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className='registration form'>

        <div className="align-left">
        <label>Name: </label>
        <input type='text' value={this.state.name} name='name' onChange={this.handleChange} /><br/>
        <label>Username: </label>
        <input type='text' value={this.state.username} name='username' onChange={this.handleChange} /><br/>
        <label>Password: </label>
        <input type='password' value={this.state.password} name='password' onChange={this.handleChange} /><br/>
        </div>

        <input type='submit' className="center-button"/>
      </form>
    )
  }

}

export default connect(null, {registerUser})(RegistrationForm)
