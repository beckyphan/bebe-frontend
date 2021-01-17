import React from 'react';
import { connect } from 'react-redux';
import { createDay } from '../actions/createDay';

class AddDayForm extends React.Component {

  constructor(props) {
    super(props)
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
      bebe_id: this.props.bebes.bebe.id,
      note: "",
      date: this.state.newDayData
    }

    this.props.createDay(newBebeDay, this.props.bebes.bebe.relationships.user.data.id)

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

const mapStateToProps = (state) => {
  return {
    user: state.user,
    bebes: state.bebes
  }
}

export default connect(mapStateToProps, { createDay })(AddDayForm)
