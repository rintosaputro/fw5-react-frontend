export const reservation = (startDate, totalDay) => ({
  type: 'RESERVATION',
  payload: {
    // price: Number(price),
    startDate: String(startDate),
    totalDay: Number(totalDay),
  },
});

export const increment = (price) => ({
  type: 'COUNTER_INCREMENT',
  payload: {
    price: Number(price),
  },
});

export const decrement = () => ({
  type: 'COUNTER_DECREMENT',
});

export const empty = () => ({
  type: 'COUNTER_EMPTY',
});
