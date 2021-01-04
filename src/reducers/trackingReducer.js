export default function trackingReducer(state = [], action) {

  switch(action.type) {
    case 'FETCH_TRACKINGS':
      return action.payload.data

    case 'DELETE_TRACKING':
      return state.filter(tracking => tracking.id !== action.payload.data.id)

    default:
      return state
  }

}
