import React from 'react';
import { connect } from 'react-redux'
import BebeDay from './BebeDay'

class BebeDays extends React.Component {


  displayDay = (day) => {
    return <BebeDay key={day.id} date={day.attributes.date}/>
  }

  render() {
    let body;

    if (this.props.days.length === 0) {
      body = <p>No Data Collected Yet!</p>
    } else {
      body = this.props.days.map(day => this.displayDay(day))
    }

    return (
      <div>
        <h3> Days </h3>
        { body }
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
