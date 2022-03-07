import { combineReducers } from "redux";
import vehicleReducer from "./vehicle";
// import { popular } from "./vehicle";
import auth from "./auth";
import counter from "./counter";
// import history from "./history";
import { history } from "./history";
import { payment } from "./payment";

const rootReducer = combineReducers({
  vehicleReducer,
  auth,
  counter,
  history,
  payment,
})

export default rootReducer