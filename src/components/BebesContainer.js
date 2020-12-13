import React from 'react';
import { connect } from 'react-redux'
import { fetchBebes } from '../actions/fetchBebes'
import Bebes from './Bebes'

class BebesContainer extends React.Component {

  componentDidMount() {
    this.props.fetchBebes(this.props.user.id)
  }

  render() {
    return (
      <div>
        <h1>my bébés</h1>
        <Bebes user={this.props.user} bebes={this.props.bebes}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("B1")
  console.log(state)
  return {
    bebes: state.bebes
  }
}

export default connect(mapStateToProps, {fetchBebes})(BebesContainer)
