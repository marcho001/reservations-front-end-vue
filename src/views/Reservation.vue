<template>
  <div class="container">
    <div class="space-40"></div>
    <transition name="show">
      <div 
        v-show="showCart"
        class="cart position-fixed scroll">
        <!--研究使用keep alive 儲存資訊 or localStorage-->
        <CartBill />
        <CartInfo
          @after-toggle-cart="afterToggleCart" />
      </div> 
    </transition>

    <div class="wrapper">
      <div class="position-relative">
        <h1 class="text-center">點餐定位</h1>
        <button 
          @click="showCart = !showCart" 
          class="cart_button position-absolute p-1">
          <font-awesome-icon :icon="solidIcon.faShoppingCart" />
        </button>
      </div>
      <hr />
      <CategoryNavTab />
      <br />
      <MenuCard 
        @after-add-item="afterAddItem"
        @after-minus-item="afterMinusItem"/>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon, solid } from '../utils/icon'
import CategoryNavTab from '../components/ReservationPage/CategoryNavTab'
import MenuCard from '../components/ReservationPage/MenuCard'
import CartBill from '../components/ReservationPage/CartBill'
import CartInfo from '../components/ReservationPage/CartInfo'
// step 1
// 人數 電話 時間
// step 2
// 點餐點

export default {
  components: {
    FontAwesomeIcon,
    CategoryNavTab,
    MenuCard,
    CartBill,
    CartInfo
  },
  data() {
    return {
      solidIcon: solid,
      showCart: false,
      order: []
    }
  },
  methods: {
    afterToggleCart() {
      // 從 component 裡面關掉 Cart 的事件
      this.showCart = true
    },
    afterAddItem (data) {
      // 找出項目的 index
      const findItemIndex = this.order.findIndex(item => {
        return item.id === data.id
      })

      // 如果存在 count++，如果不存在 array.push
      if (findItemIndex >= 0) {
        this.order[findItemIndex] = {
          ...this.order[findItemIndex],
          count: data.count
        }
      } else {
        this.order.push(data)
      }
    },
    afterMinusItem (data) {
      // 如果 count === 0，從 array 拿掉
      if (data.count === 0) {
        console.log(data)
        this.order = this.order.filter(item => item.id !== data.id)
        return
      }
      // 找出項目的 index
      const findItemIndex = this.order.findIndex(item => {
        return item.id === data.id
      })
      // 將 count--
      this.order[findItemIndex] = {
          ...this.order[findItemIndex],
          count: data.count
        }
    }
  }
}

// 存入localStorage
// 離開頁面清除
// 付款後清除 傳入資料庫
</script>
<style lang="scss" scoped>
@import '@/assets/css/pages/Reservation';
</style>
