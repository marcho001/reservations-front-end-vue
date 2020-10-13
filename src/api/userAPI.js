import { apiHelper } from '../utils/helpers'

export default {
  getOrders ({ userId, type }) {
    const searchParams = new URLSearchParams({ type })
    return apiHelper.get(`/member/${userId}/orders?${searchParams}`)
  }
}
