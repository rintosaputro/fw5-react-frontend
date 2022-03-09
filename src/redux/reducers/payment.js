const historyState = {
  newHistory: {},
  isLoading: false,
  isError: false,
  finishPayment: false
}

export const payment = (state = historyState, action) => {
  switch(action.type) {
    case 'ADD_HISTORY_PENDING': {
      // state.newHistory = {}
      state.isLoading = true
      state.isError = false
      state.newHistory = {}
      state.finishPayment = false
      return {...state}
    }
    case 'ADD_HISTORY_FULFILLED': {
      const {data} = action.payload
      state.isLoading = false
      // state.newHistory = {}
      // state.newHistory = {...data.results, id: 2}
      Object.assign(state.newHistory, {...data.results})
      state.isError = false
      state.finishPayment = true
      return {...state}
    }
    case 'ADD_HISTORY_REJECTED': {
      state.isError = true
      state.finishPayment = false
      state.isLoading = false
      return {...state}
    }
    case 'DELETE_NEW_HISTORY_DATA': {
      state.finishPayment = false
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}



// export default payment
