import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  postComment(data) {
    return apiHelper.post('/comment', data, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  }
}
