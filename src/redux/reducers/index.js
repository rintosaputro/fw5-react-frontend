import { combineReducers } from "redux";
import vehicleReducer from "./vehicle";
import auth from "./auth";
import counter from "./counter";
import { history, detailHistory, deleteHistory } from "./history";
import { payment } from "./payment";
import { updateProfile, registerUser, changePwd } from "./user";

const rootReducer = combineReducers({
  vehicleReducer,
  auth,
  counter,
  history,
  detailHistory,
  deleteHistory,
  payment,
  updateProfile,
  registerUser,
  changePwd,
})

export default rootReducer