import {default as axios} from "axios";
import http from "../../helper/http";

export const popular = () => {
  return ({
    type: 'POPULAR',
    // payload: http().get('/popular?limit=4')
    payload: axios.get('http://localhost:5000/popular?limit4')
  })
}