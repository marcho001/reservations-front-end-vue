<template>
  <div class="container">
    <input class="cart--toggle d-none" type="checkbox" :checked="showCart" />
    <div class="cart position-fixed scroll">
    <!--研究使用keep alive 儲存資訊 or localStorage-->
      <CartBill />
      <CartInfo @after-toggle-cart="afterToggleCart" />
    </div>

    <div class="wrapper">
      <div class="position-relative">
        <h1 class="text-center">點餐定位</h1>
        <button @click="toggleCart" class="cart_button position-absolute p-1">
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
      showCart: true
    }
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart
    },
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
  height: 100vh;
  width: 90%;
  background: $background;
  z-index: 100;
  transform: scale(1, 1);
  transform-origin: left;
  transition: transform 0.2s 0.1s;
}
.cart--toggle:checked + .cart {
  transform: scale(0, 1);
  .info,
  .bill {
    opacity: 0;
  }
}
.cart_button {
  font-size: 1.5rem;
  top: 50%;
  right: 0;
  transform: translateY(-40%);
  color: $mask;
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
