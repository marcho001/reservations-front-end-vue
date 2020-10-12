<template>
  <div class="info">
    <h2 class="text-center">訂位資訊</h2>
    <form class="info_form d-flex">
      <div class="info_form_item m-1">
        <label for="name">姓名：</label>
        <input
          v-model="information.name" 
          type="text" 
          name="name" 
          id="name" />
      </div>
      <div class="info_form_item m-1">
        <label for="tel">電話：</label>
        <input 
          v-model="information.phone"
          type="tel" 
          name="tel" 
          id="tel"/>
      </div>
      <div class="info_form_item m-1">
        <label>日期：</label>
        <input 
          v-model="information.date"
          type="date" 
          name="date" />
      </div>
      <div class="info_form_item m-1">
        <label>時間：</label>
        <!--可選時間-->
        <input 
          v-model="information.time"
          type="time" />
      </div>
      <div class="info_form_item m-1 d-flex">
        <label>人數：</label>
        <div class="select-wrapper position-relative">
          <select 
            v-model="information.seat"
            class="w-100 h-100" 
            name="seat">
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
        <input 
          v-model="isCurrentUser"
          @change="sameAsCurrentUser"
          type="checkbox" 
          id="currentUser" />
        <label for="currentUser">同帳號資訊</label>
      </div>
      <div class="button_wrapper mt-4">
        <button @click="toggleCart" class="button_wrapper--back mr-2 p-1">
          繼續點餐
        </button>
        <button 
          @click="confirmToPay"
          type="submit" class="button_wrapper--pay p-1">
          前往結帳
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Confirm, Toast } from '../../utils/helpers'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      information: {
        name: '',
        phone: '',
        date: '',
        time: '',
        seat: 0
      },
      isCurrentUser: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    toggleCart() {
      this.$emit('after-toggle-cart')
    },
    confirmToPay() {
      //驗證表單
      const { name, phone, date, time, seat } = this.information
      if (!name || !phone || !date || !time || !seat) {
        Toast.fire({
          icon: 'error',
          title: '訂位資訊所有欄位為必填！'
        })
        return
      }
      Confirm.fire({
        title: '即將前往付款！',
        text: '已檢查過餐點內容了嗎？',
        confirmButtonText: '前往付款',
        cancelButtonText: '再確認一次..'
      }).then(res => {
        if (res.isConfirmed) {
          this.$emit('after-confirm-pay', this.information)
        }
      })
    },
    sameAsCurrentUser () {
      if (this.isCurrentUser) {
        console.log(this.currentUser)
        this.information = {
          ...this.information,
          name: this.currentUser.name
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/components/ReservationPage/CartInfo';
</style>
