export default function userReducer(state = {user: []}, action) {

  switch(action.type) {
    case 'LOGIN_USER':
      console.log(action.payload.data)
      return { user: action.payload.data }

    case 'REGISTER_USER':
      console.log(action.payload.data)
      return { user: action.payload.data }

    default:
      return state
  }

}
