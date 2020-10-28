import { apiHelper } from '../utils/helpers'

export default {
  getHome({ page, CategoryId, CityId, searchContent }) {
    // 將參數換成 params
    const searchParams = new URLSearchParams({ page, CategoryId, CityId, searchContent })
    // 會變成像 "page=1&categoryId=1"
    return apiHelper.get(`/home?${searchParams.toString()}`)
  },
  getRest(id) {
    return apiHelper.get(`/restaurant/${id}`)
  },
  getMenu({ restaurantId, MealCategoryId, page }) {
    const searchParams = new URLSearchParams({ MealCategoryId, page })
    return apiHelper.get(
      `/restaurant/${restaurantId}/reservation?${searchParams.toString()}`
    )
  },
  postOrder(id, payload) {
    return apiHelper.post(`/order/${id}`, payload)
  }
}
