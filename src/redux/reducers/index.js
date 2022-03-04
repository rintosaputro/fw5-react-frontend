import { combineReducers } from "redux";
import popular from "./popular";

const initialState = {
  token: null,
}
const vehicleDetailState = {
  vehicle: [],
  isLoading: false
}
const qtyState = {
  total: 1,
}
const vehicleState = {
  vehicle: [],
  isLoading: false,
  error: false,
}

const rootReducer = combineReducers({
  popular,
  auth: (state = initialState, action) => {
    switch(action.type) {
      case 'LOGIN': {
        // const {username, password} = action.payload
        // if (username === 'Admin' && password === '1234') {
        //   state.token = 'test'
        //   return state
        // } else {
        //   alert('Wrong username or password')
        //   state.token = null
        //   return state
        // }
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
  },
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
  vehiclePopular: (state = vehicleState, action) => {
    switch(action.type) {
      case 'GET_VEHICLE_PENDING': {
        state.isLoading =true
        return state
      }
      case 'GET_VEHICLE_FULFILLED': {
          const {data} = action.payload
          state.vehicle = data.results
          state.isLoading = false
          return state
      }
      case 'GET_VEHICLE_REJECTED': {
          state.isLoading = false
          state.isError = true
          return state
      }
      default: {
        return state
      }
    }
  }
})

export default rootReducer