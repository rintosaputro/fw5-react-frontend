import { combineReducers } from "redux";
import vehicleReducer from "./vehicle";
// import { popular } from "./vehicle";
import auth from "./auth";
import counter from "./counter";
// import history from "./history";
import { history, detailHistory, deleteHistory } from "./history";
// import { detailHistory } from "./history";
import { payment } from "./payment";

const rootReducer = combineReducers({
  vehicleReducer,
  auth,
  counter,
  history,
  detailHistory,
  deleteHistory,
  payment,
})

export default rootReducer