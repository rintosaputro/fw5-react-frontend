import { combineReducers } from "redux";
import vehicleReducer from "./vehicle";
// import { popular } from "./vehicle";
import auth from "./auth";

const vehicleDetailState = {
  vehicle: [],
  isLoading: false
}
const qtyState = {
  total: 1,
}

const rootReducer = combineReducers({
  vehicleReducer,
  // popular,
  auth,
  vehicleDetail: (state = vehicleDetailState, action) => {
    switch(action.type) {
      case 'GET_DETAIL_PENDING': {
        state.isLoading = true
        return state
      }
      case 'GET_DETAIL_FULFILLED': {
        const {data} = action.payload
        state.vehicle = data.results
        return state
      }
      default: {
        return state
      }
    }
  },
  qty: (state = qtyState, action) => {
    switch(action.type) {
      case 'INCREMENT': {
        state.total += 1
        return state
      }
      case 'DECREMENT': {
        state.total -= 1
        return state
      }
      default: {
        return state
      }
    }
  },
})

export default rootReducer