export const registerUser = (credentials) => {
  return (dispatch) => {
    fetch('https://my-bebe-api.herokuapp.com/api/v1/users', {
      method: "POST",
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch({type: 'REGISTER_USER', payload: user})
      }
    })
  }
}
