export default function bebeReducer(state = [], action) {

    switch(action.type) {
      case 'FETCH_BEBES':
        return action.payload.data

      case 'CREATE_BEBE':
        return state.concat(action.payload.data)

      case 'EDIT_BEBE':
        return {
          bebe: action.payload.data
        }

      case 'FETCH_A_BEBE':
        return {
          bebe: action.payload.data
        }

      case 'DELETE_BEBE':
        return state.filter(bebe => bebe.id !== action.payload.data.id)

      case 'CLEAR_BEBES':
        return []
      default:
        return state
  }

}
