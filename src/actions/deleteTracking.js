export const deleteTracking = (trackingId, userId, dayId, bebeId) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users/' + userId + '/bebes/' + bebeId + '/days/' + dayId + '/trackings/' + trackingId , {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(tracking => {
        dispatch({type: 'DELETE_TRACKING', payload: tracking})
    })
  }
}
