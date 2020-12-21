import React from 'react';
import { connect } from 'react-redux'
import { fetchABebe } from '../actions/showBebe'
import BebeData from './BebeData'

class ABebeContainer extends React.Component {

  componentDidMount() {
    console.log("component did mount")
    this.props.fetchABebe(this.props.match.params.id, this.props.user.id)
  }

  render() {
    return (
      <div>
        { !!this.props.bebe.attributes ? <BebeData bebe={this.props.bebe}/> : <p>Loading...</p>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("Showing one Bebe")
  console.log(state)
  return {
    ...state,
    bebe: state.bebe
  }
}

export default connect(mapStateToProps, {fetchABebe})(ABebeContainer)
