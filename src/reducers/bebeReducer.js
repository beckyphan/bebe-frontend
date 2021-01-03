export default function bebeReducer(state = [], action) {

    switch(action.type) {
      case 'FETCH_BEBES':
        return action.payload.data

      default:
        return state
  }

}
