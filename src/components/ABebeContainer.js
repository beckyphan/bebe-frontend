import React from 'react';
import { connect } from 'react-redux'
import { fetchABebe } from '../actions/showBebe'
import BebeData from './BebeData'

class ABebeContainer extends React.Component {

  componentDidMount() {
    this.props.fetchABebe(this.props.match.params.id, this.props.user.id)
  }

  render() {
    return (
      <div>
        { !!this.props.bebes.bebe ? <BebeData bebe={this.props.bebes.bebe}/> : <p>Loading...</p>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, {fetchABebe})(ABebeContainer)
