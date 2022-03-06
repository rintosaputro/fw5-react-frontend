export const increment = (price) => {
  return ({
    type: 'COUNTER_INCREMENT',
    payload: {price: Number(price)}
  })
}

export const decrement = () => {
  return ({
    type: 'COUNTER_DECREMENT'
  })
}