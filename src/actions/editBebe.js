export const editBebe = (bebeData, userId) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users/' + userId + '/bebes/' + bebeData.id, {
      method: "PATCH",
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(bebeData)
    })
    .then(response => response.json())
    .then(bebe => {
      if (bebe.error) {
        alert(bebe.error)
      } else {
        dispatch({type: 'EDIT_BEBE', payload: bebe})
      }
    })
  }
}
