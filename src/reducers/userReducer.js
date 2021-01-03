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

    case 'EDIT_BEBE':
        return {
          ...state,
          bebes: state.bebes.map(bebe => bebe.id === action.payload.data.id ? action.payload.data : bebe)
        }

    case 'FETCH_A_BEBE':
      return {
        ...state,
        bebe: action.payload.data
      }

    case 'DELETE_BEBE':
      return {
        ...state,
        bebes: state.bebes.filter(bebe => bebe.id !== action.payload.data.id)
      }

    case 'FETCH_BEBE_DAYS':
      return {
        ...state,
        days: action.payload.data
      }

    case 'CREATE_DAY':
      return {
        ...state,
        days: [...state.days, action.payload.data]
      }

    default:
      return state
  }

}
