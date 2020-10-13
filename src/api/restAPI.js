import { apiHelper } from '../utils/helpers'

export default {
  getHome({ page, CategoryId, CityId }) {
    // 將參數換成 params
    const searchParams = new URLSearchParams({ page, CategoryId, CityId })
    // 會變成像 "page=1&categoryId=1"
    return apiHelper.get(`/home?${searchParams.toString()}`)
  },
  getRest(id) {
    return apiHelper.get(`/restaurant/${id}`)
  },
  getMenu(id) {
    return apiHelper.get(`/reservation/${id}`)
  },
  postOrder(id, payload) {
    return apiHelper.post(`/reservation/${id}`, payload)
  }
}
