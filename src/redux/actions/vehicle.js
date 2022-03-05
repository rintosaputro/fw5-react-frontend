import http from "../../helper/http";

export const popular = () => {
  return {
    type: 'GET_POPULAR',
    payload:http().get(`/popular?limit=8`)
  }
}

export const nextPopular = (page, search) => {
  return {
    type: 'GET_NEXT_POPULAR',
    payload: http().get(`/popular?page=${page}&limit=8`)
  }
}

export const getVehicleDetail = (id) => {
  return {
    type: 'GET_DETAIL',
    payload: http().get(`/vehicles/${id}`)
  }
}