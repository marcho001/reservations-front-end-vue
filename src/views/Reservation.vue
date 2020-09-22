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
    <div class="reservation_navTab my-4">
      <input
        type="checkbox"
        class="navTab--toggle d-none"
        :checked="toggle.category"
      />
      <div class="navTab position-relative">
        <button
          @click="toggleReservationCategory"
          class="navTab_button position-absolute p-2 text-center"
        >
          <font-awesome-icon :icon="solidIcon.faListUl" />
        </button>
        <div class="group d-flex justify-content-around p-2">
          <a href="#" class="group_item active m-1">全部</a>
          <a href="#" class="group_item m-1">牛肉</a>
          <a href="#" class="group_item m-1">牛肉</a>
          <a href="#" class="group_item m-1">牛肉</a>
          <a href="#" class="group_item m-1">牛肉</a>
          <a href="#" class="group_item m-1">牛肉</a>
          <a href="#" class="group_item m-1">豬肉</a>
          <a href="#" class="group_item m-1">羊肉</a>
          <a href="#" class="group_item m-1">肌肉</a>
        </div>
      </div>
    </div>

    <br>
    <div class="menu d-grid">
      <div class="menu_item">
        <img src="@/assets/image/background.jpeg" alt="">
        <div class="menu_item_body">
          <h1 class="text-center">滷肉飯</h1>
          <p class="description text-center px-2">
            很油很閒很好吃的滷肉飯，真的由真得閒，有夠好吃，好好吃真好吃超級好吃的ㄑosidjfsojfsidjfsoidfjsiofjspaoisdjaosidfjasodif
          </p>  
        </div>
        <div class="menu_item_footer d-flex justify-content-end align-items-center my-3">
        <h3 class="mr-3">NT$ 50</h3>
        <div class="count mx-2 d-flex">
          <button class="count_button minus">-</button>
          <input class="count_input text-center m-0" type="number" disabled>
          <button class="count_button plus">+</button>
        </div>
        </div>
      </div>


    </div>
</div>

    <div class="bill"></div>
  </div>
</template>
<script>
import { FontAwesomeIcon, solid } from '../utils/icon'
// step 1
// 人數 電話 時間
// step 2
// 點餐點

export default {
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      solidIcon: solid,
      toggle: {
        info: true,
        category: true
      }
    }
  },
  methods: {
    toggleReservationInfo() {
      this.toggle.category = true
      this.toggle.info = !this.toggle.info
    },
    toggleReservationCategory() {
      this.toggle.info = true
      this.toggle.category = !this.toggle.category
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


.navTab {
  @extend %shadow, %radius;
  width: 85%;
  height: 100%;
  margin-left: 2rem;
  background: $white;
  transition: width .2s, height 0s .2s;
  &_button {
    @extend %shadow, %radius;
    left: -2rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    background: $categoryTag;
    color: $white;
  }
}
.group {
  flex-wrap: wrap;
  opacity: 1;
  transition: opacity 0.2s 0.2s;

  .active {
    color: $buttonColor;
    border-bottom: 2px solid $buttonColor;
  }
  &_item {
    color: $textColor;
    font-weight: bold;
    &:hover {
      color: $buttonColor;
    }
  }
}
.navTab--toggle:checked ~ .navTab > .group {
  transform: scale(0, 0);
  opacity: 0;
}
.navTab--toggle:checked ~ .navTab {
  height: 20px;
  width: 0;
  transition: width .2s .2s, height .2s;
}



.menu {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1.5rem;
}
.menu_item {
  @extend %shadow, %radius;
  overflow: hidden;
  &_body {
    border-bottom: 1px solid $mask;
    .description {
      @include textWrap(2);
    }
  }
}
.count {
  &_button {
    @extend %tagStyle;
    width: 1.5rem;
    height: 1.5rem;
    color: $white;
    transform: translate(0, 0);
  }
  .plus {
    background: $buttonColor;
  }
  .minus {
    background: $mainColor;
    transform: rotate(180deg);
  }
  &_input {
    width: 2rem;
    height: 1.5rem;
    border: 0;
    border-top: 1px solid $mask;
    border-bottom: 1px solid $mask;
    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button{
      appearance: none;
    }
  }
}
</style>
