import React from 'react';
import BebeDays from './BebeDays'
import DisplayBebeInfo from './DisplayBebeInfo'
import EditBebeForm from './EditBebeForm'
import AddDayForm from './AddDayForm'

class BebeData extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      editToggle: false
    }
  }

  toggleEdit = () => {
    this.setState({
      ...this.state,
      editToggle: !this.state.editToggle
    })
  }

  render() {
    return (
      <div className="show-bebe">

        <h1>{this.props.bebe.attributes.name}</h1>
        <img src={this.props.bebe.attributes.img} alt="baby pic" className="headshot"/><br/><br/>
        {!this.state.editToggle ? <button className="edit" onClick={this.toggleEdit}>Edit Info</button> : null}
        {this.state.editToggle ? <EditBebeForm user={this.props.bebe.relationships.user.data} name={this.props.bebe.attributes.name} kind={this.props.bebe.attributes.kind} birthdate={this.props.bebe.attributes.birthdate} bio={this.props.bebe.attributes.bio} img={this.props.bebe.attributes.img} bebeId={this.props.bebe.id} />: <DisplayBebeInfo kind={this.props.bebe.attributes.kind} birthdate={this.props.bebe.attributes.birthdate} bio={this.props.bebe.attributes.bio}/>}
        <BebeDays/>
        <br/>
        <AddDayForm />
      </div>
    )
  }
}

export default BebeData
