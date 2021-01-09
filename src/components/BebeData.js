import React from 'react';
import BebeDays from './BebeDays'
import DisplayBebeInfo from './DisplayBebeInfo'
import EditBebeForm from './EditBebeForm'
import { connect } from 'react-redux'
import { createDay } from '../actions/createDay'

class BebeData extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      editToggle: false,
      newDayData: ""
    }
  }

  toggleEdit = () => {
    this.setState({
      ...this.state,
      editToggle: !this.state.editToggle
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let newBebeDay = {
      bebe_id: this.props.bebe.id,
      note: "",
      date: this.state.newDayData
    }

    this.props.createDay(newBebeDay, this.props.bebe.relationships.user.data.id)

    this.setState({
      ...this.state,
      newDayData: ""
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
        <form className="addDay" onSubmit={this.handleSubmit}>
          <input type="date" name="newDayData" value={this.state.newDayData} onChange={this.handleChange} />
          <input type="submit" className="addSubmit" value="+"/>
        </form>
      </div>
    )
  }
}

export default connect(null, {createDay})(BebeData)
