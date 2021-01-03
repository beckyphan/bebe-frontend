export const createDay = (newBebeDay, userId) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users/' + userId + '/bebes/' + newBebeDay.bebe_id + '/days', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBebeDay)
      })
    .then(response => response.json())
    .then(day => {
      if (day.error) {
        alert(day.error)
      } else {
        dispatch({type: 'CREATE_DAY', payload: day})
      }
    })
  }
}
