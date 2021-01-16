import React from 'react';
import { connect } from 'react-redux';

const UserContainer = (props) => {

  return (
    <div className="profile">
      <p>Name: {props.user.attributes.name}</p>
      <p>Username: {props.user.attributes.username}</p>
      <br/>
      <p>Total Number of Bébés: {props.bebes.length}</p>
      <ul>
        <li>Humans: {(props.bebes.filter(item => item.attributes.kind === "human")).length}</li>
        <li>Pets: {(props.bebes.filter(item => item.attributes.kind === "pet")).length}</li>
        <li>Plants: {(props.bebes.filter(item => item.attributes.kind === "plant")).length}</li>
      </ul>

    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    bebes: state.bebes
  }
}

export default connect(mapStateToProps)(UserContainer)
