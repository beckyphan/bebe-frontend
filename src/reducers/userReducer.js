export default function userReducer(state = {user: [], bebes: []}, action) {

  switch(action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.payload.data
      }

    case 'REGISTER_USER':
      return {
        ...state,
        user: action.payload.data
      }

    case 'FETCH_BEBES':
      return {
        ...state,
        bebes: action.payload.data
      }

    case 'CREATE_BEBE':
      console.log(action.payload.data)
      return {
        ...state,
        bebes: [...state.bebes, action.payload.data]
      }

    default:
      return state
  }

}
