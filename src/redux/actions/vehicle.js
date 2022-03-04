import {default as axios} from 'axios'

export const getVehiclePopular = () => {
  return {
    type: 'GET_VEHICLE',
    payload: axios.get(`http://localhost:5000/popular?limit=4`)
  }
}

export const getVehicleDetail = (id) => {
  return {
    type: 'GET_DETAIL',
    payload: axios.get(`http://localhost:5000/vehicles/${id}`)
  }
}