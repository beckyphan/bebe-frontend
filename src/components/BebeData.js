import React from 'react';
import BebeDays from './BebeDays'
import DisplayBebeInfo from './DisplayBebeInfo'

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
        {this.state.editToggle ? this.displayEditable() : <DisplayBebeInfo kind={this.props.bebe.attributes.kind} birthdate={this.props.bebe.attributes.birthdate} bio={this.props.bebe.attributes.bio}/>}
        <BebeDays />

      </div>
    )
  }
}

export default BebeData
