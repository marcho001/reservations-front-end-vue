<template>
  <div class="info">
    <h2 class="text-center">訂位資訊</h2>
    <form class="info_form d-flex">
      <div class="info_form_item m-1">
        <label for="name">姓名：</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div class="info_form_item m-1">
        <label for="tel">電話：</label>
        <input type="tel" name="tel" id="tel" required />
      </div>
      <div class="info_form_item m-1">
        <label>日期：</label>
        <input type="date" name="date" />
      </div>
      <div class="info_form_item m-1">
        <label>時間：</label>
        <!--可選時間-->
        <input type="time" />
      </div>
      <div class="info_form_item m-1 d-flex">
        <label>人數：</label>
        <div class="select-wrapper position-relative">
          <select class="w-100 h-100" name="seat">
            <option value="" disabled selected>0</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
    </form>
    <div class="d-flex justify-content-around mt-1">
      <div class="align-self-center mr-2">
        <input type="checkbox" id="" />
        <label for="">同帳號資訊</label>
      </div>
      <div class="button_wrapper mt-4">
        <button @click="toggleCart" class="button_wrapper--back mr-2 p-1">
          繼續點餐
        </button>
        <button @click="confirmToPay" class="button_wrapper--pay p-1">
          前往結帳
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Confirm } from '../../utils/helpers'
export default {
  methods: {
    toggleCart() {
      this.$emit('after-toggle-cart')
    },
    confirmToPay() {
      Confirm.fire({
        title: '即將前往付款！',
        text: '已檢查過餐點內容了嗎？',
        confirmButtonText: '前往付款',
        cancelButtonText: '再確認一次..'
      }).then(res => {
        if (res.isConfirmed) {
          console.log('go pay')
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/components/ReservationPage/CartInfo';
</style>
