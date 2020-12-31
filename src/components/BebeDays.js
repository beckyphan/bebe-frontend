import React from 'react';
import { connect } from 'react-redux'

class BebeDays extends React.Component {

  render() {
    return (
      <div>
        <h3> Days </h3>
        { !!this.props.days.length > 0 ? this.props.days.map(day => <p key={day.id}>{day.attributes.date}</p>) : <p>No Data Collected Yet!</p> }
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
