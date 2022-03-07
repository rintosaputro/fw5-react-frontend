import http from "../../helper/http";

export const updateProfile = (token, data) => {
  const formData = new FormData()
  const {image, gender, email, address, phone_number, username, birthdate} = data
  if (image) {
    formData.append('image', image)
  }
  if (gender) {
    formData.append('gender', gender)
  }
  if (email) {
    formData.append('email', email)
  }
  if (address) {
    formData.append('address', address)
  }
  if (phone_number) {
    formData.append('phone_number', phone_number)
  }
  if (username) {
    formData.append('username', username)
  }
  if (birthdate) {
    formData.append('birthdate', birthdate)
  }
  
  return ({
    type: 'UPDATE_PROFILE',
    payload: http(token).patch('/users', formData)
  })
}