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
      <MenuCard />
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
      showCart: false
    }
  },
  methods: {
    afterToggleCart() {
      // 從 component 裡面關掉 Cart 的事件
      this.showCart = true
    }
  }
}

// 存入localStorage
// 離開頁面清除
// 付款後清除 傳入資料庫
</script>
<style lang="scss" scoped>
.cart {
  @extend %lobster;
  @extend %shadow;
  color: $textColor;
  top: 3.5rem;
  bottom: 0;
  width: 90%;
  background: $background;
  z-index: 100;
}
.show-enter-active, .show-leave-active {
  transform: scaleX(1);
  transform-origin: left;
  opacity: 1;
}
.show-enter-active {
  transition: transform .4s, opacity .2s .2s;
}
.show-leave-active {
  transition: transform .4s .2s, opacity .2s;
}
.show-enter, .show-leave-to {
  transform: scaleX(0);
  opacity: 0;
}

.cart_button {
  font-size: 1.5rem;
  top: 50%;
  right: 0;
  transform: translateY(-40%);
  color: $mask;
  &:hover {
    color: $buttonColor;
  }
}
@media screen and (min-width: 768px) {
  .cart {
    width: 40%;
  }
  .bill {
    margin: 1rem auto;
  }
  .info_form {
    margin: 1.5rem;
  }
}
</style>
