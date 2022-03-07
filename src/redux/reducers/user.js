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

const registerState = {
  results: {},
  message: '',
  isLoading: false,
  isError: false,
}

export const registerUser = (state = registerState, action) => {
  switch(action.type) {
    case 'REGISTER_PENDING': {
      state.isLoading = true
      state.isError = false
      return {...state}
    }
    case 'REGISTER_FULFILLED': {
      const {data} = action.payload
      state.isLoading = false
      state.isError = false
      state.message = data.message
      state.results = {...data.results}
      return {...state}
    }
    case 'REGISTER_REJECTED': {
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