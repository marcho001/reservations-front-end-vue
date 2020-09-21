import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

const ConfirmCancel = Swal.mixin({
  title: '確認要取消嗎？',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  confirmButtonText: '我要取消!',
  cancelButtonText: '不小心按錯了!'
})

export { Toast, ConfirmCancel }
