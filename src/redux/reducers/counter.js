const counterState = {
  price: 0,
  totalPrice: 0,
  totalItem: 1,
}

const counter = (state = counterState, action) => {
  switch(action.type) {
    case 'COUNTER_INCREMENT': {
      const {price} = action.payload
      state.price = Number(price)
      state.totalPrice += state.price
      state.totalItem += 1
      return {...state}
    }
    case 'COUNTER_DECREMENT': {
      if (state.totalItem > 1) {
        state.totalPrice -= state.price
        state.totalItem -= 1
      }
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}

export default counter