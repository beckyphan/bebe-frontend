import React from 'react';
import { connect } from 'react-redux'
import { fetchBebeDays } from '../actions/fetchBebeDays'

class BebeDays extends React.Component {

  componentDidMount(){
    this.props.fetchBebeDays(this.props.bebe.id, this.props.user.id)
  }

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
  console.log("BEBE DAYS")
  console.log (state)
  return {
    ...state
  }
}

export default connect(mapStateToProps, {fetchBebeDays})(BebeDays)
