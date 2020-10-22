import { apiHelper } from '../utils/helpers'

export default {
  getRestaurant() {
    return apiHelper.get('/business/restaurant')
  },
  getMenu({ page }) {
    const searchParams = new URLSearchParams({ page })
    return apiHelper.get(`/business/menu?${searchParams.toString()}`)
  },
  postMeal(formData) {
    return apiHelper.post('/business/meal', formData)
  },
  putMeal(formData) {
    return apiHelper.put('/business/menu', formData)
  },
  putRestaurant(formData) {
    return apiHelper.put('/business/restaurant', formData)
  },
  patchIsSale(mealId, data) {
    return apiHelper.patch(`/business/isSale/${mealId}`, data)
  }
}
