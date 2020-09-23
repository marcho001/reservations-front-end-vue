<template>
  <div class="container">

    


<input
  class="cart--toggle d-none"
  type="checkbox" 
  :checked="showCart"
/>   
<div class="cart position-fixed">
    <div class="bill d-flex flex-column justify-content-around align-items-center">
    <div class="bill_list scroll my-2 p-2">   

    
      <ul class="bill_list_item d-flex align-items-center
      my-2">
        <li class="name text-center m-1">秋刀魚抹鹽梯 黃金鱸魚</li>
        <li class="m-1">x2</li>
        <li class="border mx-3"></li>
        <li class="m-1">NT$ 100</li>
      </ul>
      <ul class="bill_list_item d-flex align-items-center
      my-2">
        <li class="name text-center m-1">秋刀魚抹鹽梯 黃金鱸魚</li>
        <li class="m-1">x2</li>
        <li class="border mx-3"></li>
        <li class="m-1">NT$ 100</li>
      </ul>
      <ul class="bill_list_item d-flex align-items-center
      my-2">
        <li class="name text-center m-1">秋刀魚抹鹽梯 黃金鱸魚</li>
        <li class="m-1">x2</li>
        <li class="border mx-3"></li>
        <li class="m-1">NT$ 100</li>
      </ul>
      <ul class="bill_list_item d-flex align-items-center
      my-2">
        <li class="name text-center m-1">秋刀魚抹鹽梯 黃金鱸魚</li>
        <li class="m-1">x2</li>
        <li class="border mx-3"></li>
        <li class="m-1">NT$ 100</li>
      </ul>
      <ul class="bill_list_item d-flex align-items-center
      my-2">
        <li class="name text-center m-1">秋刀魚抹鹽梯 黃金鱸魚</li>
        <li class="m-1">x2</li>
        <li class="border mx-3"></li>
        <li class="m-1">NT$ 100</li>
      </ul>
      <ul class="bill_list_item d-flex align-items-center
      my-2">
        <li class="name text-center m-1">秋刀魚抹鹽梯 黃金鱸魚</li>
        <li class="m-1">x2</li>
        <li class="border mx-3"></li>
        <li class="m-1">NT$ 100</li>
      </ul>



       </div>
       <div class="w-100">
         <div class="total m-1  pt-4 d-flex justify-content-end">
           <h2 class="mr-4 align-self-center">Total:</h2>
           <h1>NT $ 233</h1>
         </div>
       </div>
     </div>
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
          <input type="checkbox"  id="">
          <label for="">同帳號資訊</label>
        </div>
        <div class="button_wrapper">
          <button
            @click="toggleCart" 
            class="button_wrapper--back mr-2 p-1">
            繼續點餐
          </button>
          <button class="button_wrapper--pay p-1">
            前往結帳
          </button>
        </div>
        </div>
    </div>
    </div>

<div class="wrapper">
    <div class="position-relative">
      <h1 class="text-center">點餐定位</h1>
      <button
        @click="toggleCart"
        class="cart_button position-absolute p-1">
        <font-awesome-icon :icon="solidIcon.faShoppingCart" />
      </button>
    </div>
<hr>
    <CategoryNavTab />
    <br>
    <MenuCard />
</div>

  </div>
</template>
<script>
import { FontAwesomeIcon, solid } from '../utils/icon'
import CategoryNavTab from '../components/ReservationPage/CategoryNavTab'
import MenuCard from '../components/ReservationPage/MenuCard'
// step 1
// 人數 電話 時間
// step 2
// 點餐點

export default {
  components: {
    FontAwesomeIcon,
    CategoryNavTab,
    MenuCard
  },
  data() {
    return {
      solidIcon: solid,
      showCart: true
    }
  },
  methods: {
    toggleCart () {
      this.showCart = !this.showCart
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
  transition: transform .2s .1s;
}

.cart--toggle:checked + .cart {
  transform: scale(0, 1);
  .info, .bill {
    opacity: 0;
  }
}
.bill {
  @extend %shadow, %radius;
  height: 50%;
  width: 85%;
  margin: 1.5rem auto 0.5rem auto;
  background: $white;
  opacity: 1;
  transition: opacity .2s;
  &_list {
    width: 100%;
    height: 80%;
    .border {
      flex-grow: 1;
      border: 2px dotted #000;
    }
    .name {
      max-width: 45%;
    }
  }
  .total {
    border-top: 1px solid $mask;
  }
}

.info {
  opacity: 1;
  transition: opacity .2s;
}
.info_form {
  width: 85%;
  margin: 0 auto;
  flex-wrap: wrap;
  label {
    font-weight: bold;
  }
  input {
    @extend %textInput;
  }
  select {
    appearance: none;
    background: transparent;
    border: 0;
    }
  .select-wrapper {
    @extend %textInput;
    width: 3rem; 
    background: $white;
    z-index: 0;
    &::after {
      content: '';
      z-index: -1;
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translateY(-20%);
      width: 0;
      height: 0;
      border-color: $mask transparent transparent transparent;
      border-style: solid;
      border-width: 0.5rem;
    }
  }    
}
.button_wrapper {
  &--back {
    @include buttonStyle($buttonColor, transparent, $buttonColor);
  }
  &--pay {
    @include buttonStyle($buttonColor, $buttonColor, $white); 
  }
}
.cart_button {
  font-size: 1.5rem;
  top: 50%;
  right: 0;
  transform: translateY(-40%);
  color: $mask;
}



</style>
