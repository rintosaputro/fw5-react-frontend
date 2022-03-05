import { combineReducers } from "redux";

const popularState = {
  vehicle: [],
  test: [
    {
      brand: "Polygon Strattos",
      capacity: "1",
      createdAt: "2022-02-28T02:27:11.000Z",
      idCategory: 3,
      idVehicle: 110,
      image: "http://localhost:5000/uploads/polygon-strattos-1646015231270-605319110.jpg",
      location: "Ngawi",
      payment: 0,
      price: 100000,
      qty: 3,
      rentCount: 0,
      status: "Available",
      type: "Bike",
      updatedAt: null,
    }
  ],
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
        // state.vehicle.push(...data.results)
        // state.test = data.results
        // state.vehicle = [...state.vehicle, ...data.results]
        // state.test.push(...data.results)
        // console.log(state.test)
        state.vehicle.push(...data.results)
        state.pageInfo = data.pageInfo
        state.isLoading = false
        return {...state}
      }
      default: {
        return {...state}
      }
    }
  }
})

export default vehicleReducer