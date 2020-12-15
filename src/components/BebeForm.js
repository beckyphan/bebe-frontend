import React from 'react';
import { connect } from 'react-redux'
import { createBebe } from '../actions/createBebe'

class BebeForm extends React.Component {

  state = {
    name: '',
    birthdate: '',
    kind: '',
    bio: '',
    img: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createBebe(this.state)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
        <div className="new-card">
          <form onSubmit={this.handleSubmit} className='new-bebe'>
            <div className="align-left">
            <label>Name: </label>
            <input type='text' value={this.state.name} name='name' onChange={this.handleChange} /><br/>

            <label>Birthdate: </label>
            <input type='date' value={this.state.birthdate} name="birthdate" onChange={this.handleChange} /><br/>

            <label>Kind: </label>
            <select name="kind" value={this.state.kind} onChange={this.handleChange}>
              <option value="human">Human</option>
              <option value="plant">Plant</option>
              <option value="pet">Pet</option>
            </select><br/>

            <label>Bio: </label>
            <textarea value={this.state.bio} name="bio" onChange={this.handleChange}/><br/>

            <label>Img URL: </label>
            <input type='text' value={this.state.img} name="img" onChange={this.handleChange} /><br/>

            </div>
            <input type='submit' className="center-button"/>
          </form>
        </div>
      )
  }
}

export default connect(null, {createBebe})(BebeForm);
