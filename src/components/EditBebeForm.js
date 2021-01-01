import React from 'react';
import { connect } from 'react-redux'
import { editBebe } from '../actions/editBebe'

class EditBebeForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.name,
      birthdate: this.props.birthdate,
      kind: this.props.kind,
      bio: this.props.bio,
      img: this.props.img,
      id: this.props.bebeId
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.editBebe(this.state, this.props.user.id)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
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

export default connect(null, { editBebe })(EditBebeForm)
