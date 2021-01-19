export const createDay = (newBebeDay, userId) => {
  return (dispatch) => {
    fetch('https://my-bebe-api.herokuapp.com/api/v1/users/' + userId + '/bebes/' + newBebeDay.bebe_id + '/days', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBebeDay)
      })
    .then(response => response.json())
    .then(day => {
      if (day.error) {
        alert(day.error.date[0])
      } else {
        dispatch({type: 'CREATE_DAY', payload: day})
      }
    })
  }
}
