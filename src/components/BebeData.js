import React from 'react';
import BebeDays from './BebeDays'

class BebeData extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editToggle: false
    }
  }

  toggleEdit = () => {
    if (this.state.editToggle) {
      this.setState({
        editToggle: false
      })
    } else {
      this.setState({
        editToggle: true
      })
    }
  }

  displayInfo = () => {
    return (
      <p className="align-left">
        Kind: {this.props.bebe.attributes.kind} <br/>
        Birthdate: {this.props.bebe.attributes.birthdate} <br/>
        Bio: {this.props.bebe.attributes.bio} <br/>
      </p>
    )
  }

  displayEditable = () => {
    return (
      <p>SHOW EDIT FORM</p>
    )
  }

  render() {
    return (
      <div className="show-bebe">

        <h1>{this.props.bebe.attributes.name}</h1>
        <img src={this.props.bebe.attributes.img} alt="baby pic" className="headshot"/><br/><br/>
        <button className="edit" onClick={this.toggleEdit}>Edit Info</button>
        {this.state.editToggle ? this.displayEditable() : this.displayInfo()}
        <BebeDays />

      </div>
    )
  }
}

export default BebeData
