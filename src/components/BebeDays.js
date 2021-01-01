import React from 'react';
import { connect } from 'react-redux'
import BebeDay from './BebeDay'

class BebeDays extends React.Component {

  displayDay = (day) => {
    return <BebeDay key={day.id} date={day.attributes.date}/>
  }

  render() {
    return (
      <div>
        <h3> Days </h3>
        { !!this.props.days && !!this.props.days.length > 0 ? this.props.days.map(day => this.displayDay(day)) : <p>No Data Collected Yet!</p> }
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
