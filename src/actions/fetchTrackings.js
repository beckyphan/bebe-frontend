export const fetchTrackings = (dayId, userId, bebeId) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users/' + userId + '/bebes/'  + bebeId + '/days/' + dayId + '/trackings')
    .then(response => response.json())
    .then(trackings => {
      dispatch({type: 'FETCH_TRACKINGS', payload: trackings})
    })
  }
}
