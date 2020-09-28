import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getHome ({ page, categoryId }) {
    // 將參數換成 params
    const searchParams = new URLSearchParams(page, categoryId)
    // 會變成像 "page=1&categoryId=1"
    return apiHelper.get(`/home?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
