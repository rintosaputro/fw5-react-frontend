import { combineReducers } from "redux";

const popularState = {
  vehicle: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
}

const vehicleReducer = combineReducers({
  popular : (state = popularState, action) => {
    switch(action.type) {
      case 'GET_POPULAR_PENDING': {
        state.isLoading = true
        return {...state}
      }
      case 'GET_POPULAR_FULFILLED': {
        const {data} = action.payload
        state.vehicle = data.results
        state.pageInfo = data.pageInfo
        state.isLoading = false
        return {...state}
      }
      case 'GET_POPULAR_REJECTED': {
        state.isError = true
        return {...state}
      }
      default: {
        return {...state}
      }
    }
  }
})

export default vehicleReducer
