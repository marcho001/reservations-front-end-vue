import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  signin({ email, password }) {
    return apiHelper.post('/signin', {
      email,
      password
    })
  },
  signUp(formData) {
    return apiHelper.post('/signup', formData)
  },
  getCurrentUser() {
    return apiHelper.get('/get_current_user', {
      headers: { Authorization: `Bearer ${getToken()}` } 
    })
  }
}
