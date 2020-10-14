import { apiHelper } from '../utils/helpers'

export default {
  getRestaurant() {
    return apiHelper.get('/business/restaurant')
  },
  getMenu() {
    return apiHelper.get('/business/menu')
  },
  postMeal (formData) {
    return apiHelper.post('/business/meal', formData)
  },
  putMeal (formData) {
    return apiHelper.put('/business/menu', formData)
  },
  putRestaurant (formData) {
    return apiHelper.put('/business/restaurant', formData)
  }
}
