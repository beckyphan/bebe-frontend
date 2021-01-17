import React from 'react';
import { connect } from 'react-redux';
import { createDay } from '../actions/createDay';

class AddDayForm extends React.Component {
  constructor() {
    super()
    this.state = {
      newDayData: ""
    }
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
      <>
        <form className="addDay" onSubmit={this.handleSubmit}>
          <input required type="date" name="newDayData" value={this.state.newDayData} onChange={this.handleChange} />
          <input type="submit" className="addSubmit" value="+"/>
        </form>
      </>
    )
  }

}

export default connect(null, { createDay })(AddDayForm)
