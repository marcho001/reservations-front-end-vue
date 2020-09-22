<template>
  <div class="container">
    <h1 class="text-center">點餐定位</h1>

    <div class="reservation_info">
      <input
        class="info--toggle d-none"
        type="checkbox"
        :checked="toggle.info"
      />
      <div class="info m-0 position-absolute">
        <button
          @click="toggleReservationInfo"
          class="info_button position-absolute p-1"
        >
          <font-awesome-icon :icon="solidIcon.faEdit" />
        </button>
        <form class="form info_form d-flex flex-column">
          <div class="info_form_item m-2">
            <label for="tel">電話：</label>
            <input type="tel" name="tel" id="tel" required />
          </div>
          <div class="info_form_item m-2">
            <label for="seat">人數：</label>
            <select name="seat" id="seat">
              <option value="" disabled selected>請選擇人數</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div class="info_form_item m-2">
            <label for="date">訂位日期：</label>
            <input type="date" name="date" id="date" />
          </div>
          <div class="info_form_item m-2">
            <label for="time">訂位時間：</label>
            <!--可選時間-->
            <input type="time" name="time" id="time" />
          </div>
          <button class="info_form_save align-self-end m-2 p-1">
            儲存定位資訊
          </button>
        </form>
      </div>
    </div>
    <br />


<div class="wrapper">
<hr>
    <CategoryNavTab />
    <br>
    <MenuCard />
</div>

    <div class="bill"></div>
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
      toggle: {
        info: true,
      }
    }
  },
  methods: {
    toggleReservationInfo() {
      this.toggle.category = true
      this.toggle.info = !this.toggle.info
    }
  }
}

// 存入localStorage
// 離開頁面清除
// 付款後清除 傳入資料庫
</script>
<style lang="scss" scoped>
.info {
  width: 300px;
  height: 200px;
  transition: width 0.2s;
  z-index: 100;
  &_form {
    border: 1px solid $mask;
    background: $background;
    @extend %shadow, %radius;
    opacity: 1;
    transition: opacity 0.1s 0.2s;
    &_item {
      label {
        font-weight: bold;
      }
      input {
        @extend %textInput;
      }
    }
    &_save {
      @extend %buttonStyle;
      background: $buttonColor;
      color: $white;
      &:hover {
        transform: none;
      }
    }
  }
  &_button {
    @extend %tagStyle;
    color: $white;
    background: $mainColor;
  }
}
.info--toggle:checked + .info {
  width: 0;
  z-index: 0;
}
.info--toggle:checked + .info > .info_form {
  transform: scale(0, 0);
  opacity: 0;
}




</style>
