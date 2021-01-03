import React from 'react';
import { connect } from 'react-redux'
import BebeDay from './BebeDay'

const BebeDays = (props) => {

  function displayDay(day) {
    return <BebeDay key={day.id} date={day.attributes.date}/>
  }

  return (
    <div>
      <h3> Days </h3>
      { !!props.days && !!props.days.length > 0 ? props.days.map(day => displayDay(day)) : <p>No Data Collected Yet!</p> }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(BebeDays)
