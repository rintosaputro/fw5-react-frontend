import axios from 'axios'
const {REACT_APP_API} = process.env

const http = () => axios.create({
  baseURL: REACT_APP_API
})

export default http