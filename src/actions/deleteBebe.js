export const deleteBebe = (bebeId, userId) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users/' + userId + '/bebes/' + bebeId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(bebe => {
        dispatch({type: 'DELETE_BEBE', payload: bebe})
    })
  }
}
