import Swal from 'sweetalert2'
import axios from 'axios'

const baseURL = 'https://restaurant-reservation-10720.herokuapp.com/api'
const apiHelper = axios.create({ baseURL })
apiHelper.interceptors.request.use(config => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
},
  err => Promise.reject(err)
)

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

const Confirm = Swal.mixin({
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6'
})

export { apiHelper, Toast, Confirm }
