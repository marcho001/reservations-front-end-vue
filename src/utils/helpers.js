import Swal from 'sweetalert2'
import axios from 'axios'

const baseURL = 'https://5cc3e7e3a0ac.ngrok.io/api'
const apiHelper =  axios.create({ baseURL })

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
