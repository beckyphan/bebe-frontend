import React from 'react';
import { connect } from 'react-redux'
import BebeDay from './BebeDay'

class BebeDays extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      daysShown: 5
    }
  }

  displayDay = (day) => {
    return <BebeDay key={day.id} dayId={day.id} date={day.attributes.date}/>
  }

  handleClick = (prevState) => {
    this.setState(prevState => {
      return {daysShown: prevState.daysShown + 5}
    })
  }

  render() {
    let body;

    if (this.props.days.length === 0) {
      body = <p>No Data Collected Yet!</p>
    } else {
      this.props.days.sort((a, b) => (a.attributes.date > b.attributes.date) ? 1 : -1)
      let allDays = this.props.days.map(day => this.displayDay(day))
      body = allDays.slice(0, this.state.daysShown)
    }

    return (
      <div className="daysList">
        <h3> Days </h3>
        { body }
        <br/><br/>
        { this.state.daysShown >= this.props.days.length ? null : <button className="showMore" onClick={this.handleClick}>Show More</button>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(BebeDays)
