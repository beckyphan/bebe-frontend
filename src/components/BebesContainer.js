import React from 'react';
import { connect } from 'react-redux'
import { fetchBebes } from '../actions/fetchBebes'
import Bebes from './Bebes'
import BebeForm from './BebeForm'

class BebesContainer extends React.Component {

  componentDidMount() {
    this.props.fetchBebes(this.props.user.id)
  }

  render() {
    return (
      <div>
        <h1>my bébés</h1>
        <Bebes user={this.props.user} bebes={this.props.bebes}/>
        <BebeForm user={this.props.user} />
      </div>
    )
  }
}

export default connect(null, {fetchBebes})(BebesContainer)
