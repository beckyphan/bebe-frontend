export default function dayReducer(state = [], action) {

  switch(action.type) {
    case 'FETCH_BEBE_DAYS':
      return action.payload.data

    case 'CREATE_DAY':
      state.push(action.payload.data)
      return state

    default:
      return state
  }

}
