export default function userReducer(state = {}, action) {

  switch(action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        id: action.payload.data.id,
        attributes: action.payload.data.attributes
      }

    case 'REGISTER_USER':
      return {
        ...state,
        id: action.payload.data.id,
        attributes: action.payload.data.attributes
      }

    case 'LOGOUT_USER':
      return {}

    default:
      return state
  }

}
