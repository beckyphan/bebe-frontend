export function fetchBebes(userId) {

  return (dispatch) => {
    fetch('https://my-bebe-api.herokuapp.com/api/v1/users/'+ userId +'/bebes')
    .then(response => response.json())
    .then(bebes => {
      dispatch({type: 'FETCH_BEBES', payload: bebes})
      dispatch({type: 'CLEAR_DAYS'})
    })
  }
}
