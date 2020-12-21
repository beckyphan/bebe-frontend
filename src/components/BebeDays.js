import React from 'react';
import { connect } from 'react-redux'
import { fetchBebeDays } from '../actions/fetchBebeDays'

class BebeDays extends React.Component {

  componentDidMount(){
    console.log("in BebeDays")

    this.props.fetchBebeDays(this.props.bebe.id, this.props.user.id)
  }


  render() {
    return (
      <div>
        <h3> Days </h3>
        { !!this.props.days && this.props.days.length > 1 ? this.props.days.map(day => <p key={day.id}>{day.date}</p>) : <p>No Data Collected Yet!</p> }
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("state avail in BebeDays")
  console.log(state)
  return {
    ...state
  }
}

export default connect(mapStateToProps, {fetchBebeDays})(BebeDays)
