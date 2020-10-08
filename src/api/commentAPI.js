import { apiHelper } from '../utils/helpers'

export default {
  postComment(data) {
    return apiHelper.post('/comment', data)
  }
}
