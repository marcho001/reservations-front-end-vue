import { apiHelper } from '../utils/helpers'

export default {
  signin ({ email, password }) {
    return apiHelper.post('/signin', {
      email,
      password
    })
  }
}
