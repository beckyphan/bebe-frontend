import React from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../actions/deleteUser'

const DeleteAccount = (props) => {
  return (
    <div>
      <h1>Are you sure you want to delete your account?</h1>
      <br/>
      <button onClick={() => props.deleteUser(props.user.id)}>Yes, final answer.</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { deleteUser })(DeleteAccount)
