export const fetchABebe = (bebeId, userId) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users/' + userId + '/bebes/'  + bebeId)
    .then(response => response.json())
    .then(bebe => {
      dispatch({type: 'FETCH_A_BEBE', payload: bebe})
    })
  }
}
