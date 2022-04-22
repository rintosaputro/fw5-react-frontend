import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import vehicleReducer from './vehicle';
import auth from './auth';
import counter from './counter';
import { history, detailHistory, deleteHistory } from './history';
import { payment } from './payment';
import {
  updateProfile, registerUser, verifyUser, changePwd, verifyPwd,
} from './user';

const persistConfig = {
  key: 'auth',
  storage,
};

const rootReducer = combineReducers({
  vehicleReducer,
  auth: persistReducer(persistConfig, auth),
  counter,
  history,
  detailHistory,
  deleteHistory,
  payment,
  updateProfile,
  registerUser,
  verifyUser,
  changePwd,
  verifyPwd,
});

export default rootReducer;
