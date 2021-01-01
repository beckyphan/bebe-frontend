import React from 'react';
import BebeDays from './BebeDays'
import DisplayBebeInfo from './DisplayBebeInfo'
import EditBebeForm from './EditBebeForm'

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

  render() {
    return (
      <div className="show-bebe">

        <h1>{this.props.bebe.attributes.name}</h1>
        <img src={this.props.bebe.attributes.img} alt="baby pic" className="headshot"/><br/><br/>
        <button className="edit" onClick={this.toggleEdit}>Edit Info</button>
        {this.state.editToggle ? <EditBebeForm name={this.props.bebe.attributes.name} kind={this.props.bebe.attributes.kind} birthdate={this.props.bebe.attributes.birthdate} bio={this.props.bebe.attributes.bio} img={this.props.bebe.attributes.img} />: <DisplayBebeInfo kind={this.props.bebe.attributes.kind} birthdate={this.props.bebe.attributes.birthdate} bio={this.props.bebe.attributes.bio}/>}
        <BebeDays />

      </div>
    )
  }
}

export default BebeData
