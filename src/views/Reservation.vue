<template>
  <div class="container">
    <div class="space-40"></div>
    <transition name="show">
      <div v-show="showCart" class="cart position-fixed scroll">
        <!--研究使用keep alive 儲存資訊 or localStorage-->
        <CartBill :total-price="totalPrice" :orders="orders" />
        <CartInfo
          @after-toggle-cart="afterToggleCart"
          @after-confirm-pay="afterConfirmPay"
        />
        <form 
          ref="newepay"
          class="d-none" 
          name="newepay" action="https://ccore.newebpay.com/MPG/mpg_gateway" method="post">
          <input 
            :value="payInfo.MerchantID"
            type="text" name="MerchantID">
          <input 
            :value="payInfo.TradeInfo"
            type="text" name="TradeInfo">
          <input 
            :value="payInfo.TradeSha"
            type="text" name="TradeSha">
          <input 
            :value="payInfo.Version"
            type="text" name="Version">
        </form>
      </div>
    </transition>

    <div class="wrapper">
      <div class="position-relative">
        <h1 class="text-center">點餐定位</h1>
        <button
          @click="showCart = !showCart"
          class="cart_button position-absolute p-1"
        >
          <font-awesome-icon :icon="solidIcon.faShoppingCart" />
        </button>
      </div>
      <hr />
      <CategoryNavTab :categories="mealCategory" />
      <br />
      <div class="menu d-grid">
        <MenuCard
          v-for="meal in meals"
          :key="meal.id"
          :meal="meal"
          @after-add-item="afterAddItem"
          @after-minus-item="afterMinusItem"
        />
      </div>
    </div>
    <Pagination 
      :total-page="totalPage"
      :current-page="page"
      :name="'reservation'"/>
  </div>
</template>
<script>
import restAPI from '../api/restAPI'
import { Toast } from '../utils/helpers'
import { FontAwesomeIcon, solid } from '../utils/icon'
import NewEPay from '../utils/newepay'

import CategoryNavTab from '../components/ReservationPage/CategoryNavTab'
import MenuCard from '../components/ReservationPage/MenuCard'
import CartBill from '../components/ReservationPage/CartBill'
import CartInfo from '../components/ReservationPage/CartInfo'
import Pagination from '../components/Pagination'
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
    CartInfo,
    Pagination
  },
  data() {
    return {
      meals: [],
      mealCategory: [],
      totalPage: [],
      prev: -1,
      page: 1,
      next: -1,
      solidIcon: solid,
      showCart: false,
      orders: [],
      payInfo: {
        MerchantID: '',
        TradeInfo: '',
        TradeSha: '',
        Version: 1.5,
        MerchantOrderNo: ''
      },
      totalPrice: 0
    }
  },
  methods: {
    async fetchMenu({ restaurantId, queryCategory, queryPage }) {
      try {
        const { data, statusText } = await restAPI.getMenu({ 
          restaurantId, 
          MealCategoryId: queryCategory, 
          page: queryPage })
        if (statusText === 'error') {
          throw new Error()
        }
        console.log(data)
        //加入數量
        this.meals = data.meals.map(item => ({
          ...item,
          quantity: 0
        }))
        this.mealCategory = data.mealCategory
        this.totalPage = data.totalPage
        this.prev = data.prev
        this.next = data.next
      } catch (err) {
        console.error(err)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐點資料，請稍後再試！'
        })
      }
    },
    async postOrder(restaurantId, payload) {
      try {
        const { data } = await restAPI.postOrder(restaurantId, payload)
        if (data.status !== 'success') {
          throw new Error()
        }
      } catch (err) {
        console.error(err)
        Toast.fire({
          icon: 'error',
          title: '訂位失敗，請稍後再試'
        })
      }
    },
    postNewepay ({ totalPrice, email }) {    
        const payData = NewEPay.getPayData(totalPrice, email)
        const chain = NewEPay.getChain(payData)

        this.payInfo.MerchantOrderNo = payData.MerchantOrderNo
        this.payInfo.MerchantID = payData.MerchantID
        this.payInfo.TradeInfo = NewEPay.Encrypt(chain)
        this.payInfo.TradeSha = NewEPay.ShaEncrypt(this.payInfo.TradeInfo)
    },



    afterToggleCart() {
      // 從 component 裡面關掉 Cart 的事件
      this.showCart = false
    },
    afterAddItem(payload) {
      // 找出項目的 index
      const findItemIndex = this.orders.findIndex(item => {
        return item.id === payload.id
      })

      // 如果存在 count++，如果不存在 array.push
      if (findItemIndex >= 0) {
        this.orders[findItemIndex] = {
          ...this.orders[findItemIndex],
          ...payload
        }
      } else {
        this.orders.push(payload)
      }
      this.price()
    },
    afterMinusItem(payload) {
      // 如果 count === 0，從 array 拿掉
      if (payload.quantity === 0) {
        this.orders = this.orders.filter(item => item.id !== payload.id)
        this.price()
        return
      }
      // 找出項目的 index
      const findItemIndex = this.orders.findIndex(item => {
        return item.id === payload.id
      })
      // 將 count--
      this.orders[findItemIndex] = {
        ...this.orders[findItemIndex],
        ...payload
      }
      this.price()
    },
    price() {
      const price = this.orders.map(item => item.price * item.quantity)
      this.totalPrice = price.reduce((a, b) => {
        return a + b
      }, 0)
    },
    async afterConfirmPay(payload) {
      try {
        //確認是否有餐點
        if (this.orders.length === 0) {
          Toast.fire({
            icon: 'error',
            title: '還沒有加入餐點！'
          })
          return
        }

        await this.postNewepay({
          totalPrice: this.totalPrice,
          email: payload.email
        })
        const bookInfo = {
          orders: this.orders,
          info: payload,
          totalPrice: this.totalPrice,
          MerchantOrderNo: this.payInfo.MerchantOrderNo
        }
        
        const restaurantId = this.$route.params.id
        await this.postOrder(restaurantId, bookInfo)
        this.orders = []
        this.totalPrice = 0
        this.$refs.newepay.submit()

      } catch (err) {
        console.error(err)
        Toast.fire({
          icon: 'error',
          title: '錯誤，請稍後再試'
        })
      }
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    const { 
      MealCategory = '', 
      page = '' } = this.$route.query

    this.fetchMenu({
      restaurantId,
      queryCategory: MealCategory,
      queryPage: page
    })
  },
  beforeRouteUpdate (to, from, next) {
    const { id: restaurantId } = to.params
    const {
      MealCategory = '',
      page = '' } = to.query
    this.fetchMenu({
      restaurantId,
      queryCategory: MealCategory,
      queryPage: page
    })
    next ()
  }
}

// 存入localStorage
// 離開頁面清除
// 付款後清除 傳入資料庫
</script>
<style lang="scss" scoped>
@import '@/assets/css/pages/Reservation';
</style>
