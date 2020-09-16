<template>
  <div class="container">
    <section class="banner">
      <div
        class="banner_wrapper d-flex flex-column justify-content-center align-items-end p-4"
      >
        <div class="banner--content mr-4">
          <p class="my-3">還在為了美食等待？</p>
          <p class="">總是有人看著菜單猶豫不決？</p>
          <br />
          <h1 class="mt-4">立即點餐訂位</h1>
          <h1>STOP WAITING !</h1>
        </div>
      </div>
    </section>

    <section class="step">
      <input type="checkbox" id="toggle" class="step_toggle d-none" />
      <label
        for="toggle"
        class="step_ques d-flex flex-column  align-items-center cursor-pointer py-2"
      >
        <p>第一次進來，該如何使用？</p>
      </label>
      <div class="step_ans d-flex justify-content-around">
        <div class="step_ans_wrapper">
          <h3>STEP.1</h3>
          <div class="step_ans_wrapper--item p-2 text-center">選擇餐廳</div>
        </div>
        <div class="step_ans_wrapper">
          <h3>STEP.2</h3>
          <div class="step_ans_wrapper--item p-2 text-center">
            選擇餐點及人數
          </div>
        </div>
        <div class="step_ans_wrapper">
          <h3>STEP.3</h3>
          <div class="step_ans_wrapper--item p-2 text-center">
            確認訂單，線上付款
          </div>
        </div>
        <div class="step_ans_wrapper text-center">
          <h3>STEP.4</h3>
          <div class="step_ans_wrapper--item p-2 text-center">準備用餐！</div>
        </div>
      </div>
    </section>

    <RestaurantCard />

    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'
import RestaurantCard from '../components/HomePage/RestaurantCard'

export default {
  components: {
    Footer,
    RestaurantCard
  },
  data() {
    return {}
  },
  methods: {
    showCategoryList() {
      console.log('click')
      this.categoryList = !this.categoryList
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  background-image: url('../assets/image/background.jpeg');
  background-position: center;
  background-size: cover;
  top: 0;
  right: 0;
  left: 0;
  right: 0;
  height: 100vh;
  @extend %font;
  &_wrapper {
    height: 100%;
    background: $mask;
    color: $white;
    p {
      font-size: 1.5rem;
    }
    h1 {
      @extend %brandFont;
      font-size: 2rem;
    }
  }
}

.step {
  &_ques {
    @extend %shadow;
    height: 80px;
    color: $textColor;
    font-weight: bold;
    font-size: 1.2rem;
    &::after {
      content: '';
      margin-top: 0.5rem;
      width: 10px;
      height: 10px;
      border-left: 3px solid #000;
      border-bottom: 3px solid #000;
      transform: rotate(-45deg);
    }
  }

  &_toggle:checked ~ &_ques::after {
    content: '';
    transform: rotate(135deg);
  }

  &_toggle:checked ~ &_ans {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 4px solid darken($white, 15%);
    border-top: 4px solid darken($white, 10%);
    height: 100%;
  }
  &_toggle:checked ~ &_ans &_ans_wrapper {
    opacity: 1;
    transition: opacity 0.2s 0.2s;
  }

  &_ans {
    transform-origin: top;
    background: darken($white, 5%);
    position: relative;
    flex-wrap: wrap;
    height: 0;
    z-index: -99;

    &_wrapper {
      opacity: 0;
      @extend %shadow;
      margin: 0.5rem;
      background: $mainColor;
      color: $textColor;
      position: relative;
      z-index: -9;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
      width: 200px;
      &--item {
        font-size: 2rem;
        color: $white;
        font-weight: bold;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.534);
      }
      h3 {
        @extend %shadow, %radius, %lobster;
        background: $white;
        padding: 0.5rem;
        font-size: 1.8rem;
        position: absolute;
        top: 0;
        left: 0;
        transform: rotate(-10deg);
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .banner_wrapper {
    p {
      font-size: 2rem;
    }
    h1 {
      font-size: 4rem;
    }
  }
}
</style>
