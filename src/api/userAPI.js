import { apiHelper } from '../utils/helpers'

export default {
  getOrders({ type }) {
    const searchParams = new URLSearchParams({ type })
    return apiHelper.get(`/member/orders?${searchParams}`)
  },
  putEditUser(formData) {
    return apiHelper.put('/member/edit', formData)
  },
  getUserInfo() {
    return apiHelper.get('/member/info')
  }
}
