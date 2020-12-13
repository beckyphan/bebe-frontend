export default function userReducer(state = {user: [], bebes: []}, action) {

  switch(action.type) {
    case 'LOGIN_USER':
      // console.log(action.payload.data)
      return { user: action.payload.data }

    case 'REGISTER_USER':
      // console.log(action.payload.data)
      return { user: action.payload.data }

    case 'FETCH_BEBES':
      console.log("C")
      return {
        ...state,
        bebes: action.payload.data
      }

    default:
      return state
  }

}
