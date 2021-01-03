export default function bebeReducer(state = [], action) {

    switch(action.type) {
      case 'FETCH_BEBES':
        return action.payload.data

      case 'CREATE_BEBE':
        state.push(action.payload.data)
        return state

      case 'DELETE_BEBE':
        return state.filter(bebe => bebe.id !== action.payload.data.id)

      default:
        return state
  }

}
