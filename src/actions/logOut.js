export const logOut = () => {
  return (dispatch) => {
      dispatch({type: 'LOGOUT_USER'})
      dispatch({type: 'CLEAR_BEBES'})
      dispatch({type: 'CLEAR_DAYS'})
    }
}
