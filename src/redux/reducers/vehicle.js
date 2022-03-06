import { combineReducers } from "redux";

const popularState = {
  vehicle: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
}
const carsState = {
  vehicle: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
}
const motorbikeState = {
  vehicle: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
}
const bikeState = {
  vehicle: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
}
const pickUpState = {
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
      case 'GET_NEXT_POPULAR_PENDING': {
        state.isLoading = true
        return {...state}
      }
      case 'GET_NEXT_POPULAR_FULFILLED': {
        const {data} = action.payload
        state.vehicle.push(...data.results)
        state.pageInfo = data.pageInfo
        state.isLoading = false
        return {...state}
      }
      default: {
        return {...state}
      }
    }
  },
  cars : (state = carsState, action) => {
    switch(action.type) {
      case `GET_CARS_PENDING`: {
        state.isLoading = true
        return {...state}
      }
      case `GET_CARS_FULFILLED`: {
        const {data} = action.payload
        state.vehicle = data.results
        state.pageInfo = data.pageInfo
        state.isLoading = false
        return {...state}
      }
      case `GET_CARS_REJECTED`: {
        state.isError = true
        return {...state}
      }
      case `GET_NEXT_CARS_PENDING`: {
        state.isLoading = true
        return {...state}
      }
      case `GET_NEXT_CARS_FULFILLED`: {
        const {data} = action.payload
        state.vehicle.push(...data.results)
        state.pageInfo = data.pageInfo
        state.isLoading = false
        return {...state}
      }
      default: {
        return {...state}
      }
    }
  },
  motorbike : (state = motorbikeState, action) => {
    switch(action.type) {
      case `GET_MOTORBIKE_PENDING`: {
        state.isLoading = true
        return {...state}
      }
      case `GET_MOTORBIKE_FULFILLED`: {
        const {data} = action.payload
        state.vehicle = data.results
        state.pageInfo = data.pageInfo
        state.isLoading = false
        return {...state}
      }
      case `GET_MOTORBIKE_REJECTED`: {
        state.isError = true
        return {...state}
      }
      case `GET_NEXT_MOTORBIKE_PENDING`: {
        state.isLoading = true
        return {...state}
      }
      case `GET_NEXT_MOTORBIKE_FULFILLED`: {
        const {data} = action.payload
        state.vehicle.push(...data.results)
        state.pageInfo = data.pageInfo
        state.isLoading = false
        return {...state}
      }
      default: {
        return {...state}
      }
    }
  },
  bike : (state = bikeState, action) => {
    switch(action.type) {
      case `GET_BIKE_PENDING`: {
        state.isLoading = true
        return {...state}
      }
      case `GET_BIKE_FULFILLED`: {
        const {data} = action.payload
        state.vehicle = data.results
        state.pageInfo = data.pageInfo
        state.isLoading = false
        return {...state}
      }
      case `GET_BIKE_REJECTED`: {
        state.isError = true
        return {...state}
      }
      case `GET_NEXT_BIKE_PENDING`: {
        state.isLoading = true
        return {...state}
      }
      case `GET_NEXT_BIKE_FULFILLED`: {
        const {data} = action.payload
        state.vehicle.push(...data.results)
        state.pageInfo = data.pageInfo
        state.isLoading = false
        return {...state}
      }
      default: {
        return {...state}
      }
    }
  },
  pickUp : (state = pickUpState, action) => {
    switch(action.type) {
      case `GET_PICKUP_PENDING`: {
        state.isLoading = true
        return {...state}
      }
      case `GET_PICKUP_FULFILLED`: {
        const {data} = action.payload
        state.vehicle = data.results
        state.pageInfo = data.pageInfo
        state.isLoading = false
        return {...state}
      }
      case `GET_PICKUP_REJECTED`: {
        state.isError = true
        return {...state}
      }
      case `GET_NEXT_PICKUP_PENDING`: {
        state.isLoading = true
        return {...state}
      }
      case `GET_NEXT_PICKUP_FULFILLED`: {
        const {data} = action.payload
        state.vehicle.push(...data.results)
        state.pageInfo = data.pageInfo
        state.isLoading = false
        return {...state}
      }
      default: {
        return {...state}
      }
    }
  },
})

export default vehicleReducer