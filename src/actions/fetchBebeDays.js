export const fetchBebeDays = (bebeId, userId) => {
  return (dispatch) => {
    fetch('https://my-bebe-api.herokuapp.com/api/v1/users/' + userId + '/bebes/'  + bebeId + '/days')
    .then(response => response.json())
    .then(days => {
      dispatch({type: 'FETCH_BEBE_DAYS', payload: days})
    })
  }
}
