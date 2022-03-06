import { combineReducers } from "redux";
import vehicleReducer from "./vehicle";
// import { popular } from "./vehicle";
import auth from "./auth";
import counter from "./counter";
import history from "./history";

const rootReducer = combineReducers({
  vehicleReducer,
  auth,
  counter,
  history,
})

export default rootReducer