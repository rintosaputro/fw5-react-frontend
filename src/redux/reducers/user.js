const updateState = {
  isLoading: false,
  isError: false,
  message: ''
}

export const updateProfile = (state = updateState, action) => {
  switch(action.type) {
    case 'UPDATE_PROFILE_PENDING': {
      state.isLoading = true
      state.isError = false
      return {...state}
    }
    case 'UPDATE_PROFILE_FULFILLED': {
      const {data} = action.payload
      state.isLoading = false
      state.isError = false
      state.message = data.message
      state.user = {...data.results}
      return {...state}
    }
    case 'UPDATE_PROFILE_REJECTED': {
      const {data} = action.payload
      state.isError = true
      state.message = data.message
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}