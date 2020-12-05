export default function userReducer(state = [], action) {

  switch(action.type) {
    case 'LOGIN_USER':
      console.log(action.payload.data)
      return { user: action.payload.data }

    default:
      return state
  }

}
