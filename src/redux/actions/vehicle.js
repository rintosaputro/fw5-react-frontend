import http from "../../helper/http";

export const popular = (limit = 4) => {
  return {
    type: 'GET_POPULAR',
    payload:http().get(`/popular?limit=${limit}`)
  }
}

export const getVehicleDetail = (id) => {
  return {
    type: 'GET_DETAIL',
    payload: http().get(`/vehicles/${id}`)
  }
}