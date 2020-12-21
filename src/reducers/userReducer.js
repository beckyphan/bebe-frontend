export default function userReducer(state = {user: [], bebes: [], bebe: {}}, action) {

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
      return {
        ...state,
        bebes: [...state.bebes, action.payload.data]
      }

      case 'FETCH_A_BEBE':
      return {
        ...state,
        bebe: action.payload.data
      }

    default:
      return state
  }

}
