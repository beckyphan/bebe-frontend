export const fetchBebeDays = (bebeId, userId) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users/' + userId + '/bebes/'  + bebeId + '/days')
    .then(response => response.json())
    .then(days => {
      console.log("connected to fetch days")
      dispatch({type: 'FETCH_BEBE_DAYS', payload: days})
    })
  }
}
