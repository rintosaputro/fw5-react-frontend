import http from '../../helper/http';

export const popular = () => ({
  type: 'GET_POPULAR',
  payload: http().get('/popular?limit=8'),
});

export const nextPopular = (page) => ({
  type: 'GET_NEXT_POPULAR',
  payload: http().get(`/popular?page=${page}&limit=8`),
});

export const category = (CATEGORY, type) => ({
  type: `GET_${CATEGORY}`,
  payload: http().get(`/popular?search=${type}&limit=8`),
});

export const nextCategory = (CATEGORY, type) => ({
  type: `GET_NEXt_${CATEGORY}`,
  payload: http().get(`/popular?search=${type}&limit=8`),
});

export const getVehicleDetail = (id) => ({
  type: 'GET_DETAIL',
  payload: http().get(`/vehicles/${id}`),
});

export const searchVehicle = (key, location, min, max) => ({
  type: 'SEARCH_VEHICLE',
  payload: http().get(`/vehicles/?limit=8&search=${key}&location=${location}&minimum=${min}&maximum=${max}`),
});

export const nextSearchVehicle = (key, location, min, max, page) => ({
  type: 'SEARCH_VEHICLE',
  payload: http().get(`/vehicles/?page=${page}&limit=8&search=${key}&location=${location}&minimum=${min}&maximum=${max}`),
});

export const getNewVehicle = () => ({
  type: 'GET_NEW_VEHICLE',
  payload: http().get('/vehicles/new'),
});
