const updateState = {
  isLoading: false,
  isError: false,
  message: '',
  isSuccess: false,
}

export const updateProfile = (state = updateState, action) => {
  switch(action.type) {
    case 'UPDATE_PROFILE_PENDING': {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
      return {...state}
    }
    case 'UPDATE_PROFILE_FULFILLED': {
      const {data} = action.payload
      state.isLoading = false
      state.isError = false
      state.message = data.message
      state.isSuccess = true
      state.user = {...data.results}
      return {...state}
    }
    case 'UPDATE_PROFILE_REJECTED': {
      const {data} = action.payload
      state.isError = true
      state.message = data.message
      state.isSuccess = false
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}