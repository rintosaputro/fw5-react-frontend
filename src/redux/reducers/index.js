import { combineReducers } from "redux";
import vehicleReducer from "./vehicle";
// import { popular } from "./vehicle";
import auth from "./auth";

const qtyState = {
  total: 1,
}

const rootReducer = combineReducers({
  vehicleReducer,
  auth,
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