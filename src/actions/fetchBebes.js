export function fetchBebes(userId) {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users/'+ userId +'/bebes')
    .then(response => response.json())
    .then(bebes => {
      dispatch({type: 'FETCH_BEBES', payload: bebes})
    })
  }
}
