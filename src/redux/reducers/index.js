import { combineReducers } from "redux";

const initialState = {
  token: null,
}

const rootReducer = combineReducers({
  auth: (state = initialState, action) => {
    switch(action.type) {
      case 'LOGIN': {
        state.token = 'test'
        return state
      }
      case 'LOGOUT': {
        state.token = null
        return state
      }
      default: {
        return state
      }
    }
  }
})

export default rootReducer