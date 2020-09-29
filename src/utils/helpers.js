import Swal from 'sweetalert2'
import axios from 'axios'

const baseURL = 'https://763f5812bb91.ngrok.io/api'
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
