const popularState = {
  vehicle: [],
  pageInfo: {},
  isLoading: false,
  isError: false,
}

const  popular = (state = popularState, action) => {
  switch(action.type) {
    case 'POPULAR_PENDING': {
      state.isLoading = true
      return {...state}
    }
    case 'POPULAR_FULFILLED': {
      const {data} = action.payload
      console.log('redux',data)
      state.vehicle = data.results
      state.pageInfo = data.pageInfo
      state.isLoading = false
      return {...state}
    }
    case 'POPULAR_REJECTED': {
      state.isError = true
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}

export default popular