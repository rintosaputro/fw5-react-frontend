import http from "../../helper/http"

export const getHistory = (username) => {
  return ({
    type: 'GET_HISTORY',
    payload: http().get(`/histories/?search=${username}`)
  })
}
