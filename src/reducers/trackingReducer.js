export default function trackingReducer(state = [], action) {

  switch(action.type) {
    case 'FETCH_TRACKINGS':
      return action.payload.data

    default:
      return state
  }

}
