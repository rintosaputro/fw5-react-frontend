import http from "../../helper/http";

export const popular = () => {
  return {
    type: 'GET_POPULAR',
    payload:http().get(`/popular`)
  }
}

export const getVehicleDetail = (id) => {
  return {
    type: 'GET_DETAIL',
    payload: http().get(`/vehicles/${id}`)
  }
}