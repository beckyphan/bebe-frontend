import React from 'react';
import { connect } from 'react-redux';
import { fetchBebes } from '../actions/fetchBebes'
import UserData from './UserData'

class UserContainer extends React.Component {

  componentDidMount() {
    this.props.fetchBebes(this.props.user.id)
  }

  render() {
    if (Array.isArray(this.props.bebes)) {
      return (
        <UserData
          name={this.props.user.attributes.name}
          username={this.props.user.attributes.username}
          bebesNumber={this.props.bebes.length}
          humansNum={(this.props.bebes.filter(item => item.attributes.kind === "human")).length}
          petsNum={(this.props.bebes.filter(item => item.attributes.kind === "pet")).length}
          plantsNum={(this.props.bebes.filter(item => item.attributes.kind === "plant")).length} />
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    bebes: state.bebes
  }
}

export default connect(mapStateToProps, { fetchBebes })(UserContainer)
