import { apiHelper } from '../utils/helpers'
import axios from 'axios'
const PayGateWay = "https://ccore.spgateway.com/MPG/mpg_gateway"

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
  getMenu({ restaurantId, MealCategoryId, page }) {
    const searchParams = new URLSearchParams({ MealCategoryId, page})
    return apiHelper.get(`/restaurant/${restaurantId}/reservation?${searchParams}`)
  },
  // postOrder(id, payload) {
  //   return apiHelper.post(`/reservation/${id}`, payload)
  // }
  postOrder(payload) {
    return axios.post(PayGateWay, payload)
  }
}
