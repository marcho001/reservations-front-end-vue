<template>
  <div class="container">
    <section class="banner">
      <div class="banner_wrapper d-flex flex-column justify-content-center align-items-end p-4">
        <div class="banner--content mr-4">
          <p class="my-3">還在為了美食等待？</p>
          <p class="">總是有人看著菜單猶豫不決？</p>
          <br>
          <h1 class="mt-4">立即點餐訂位</h1>
          <h1>STOP WAITING !</h1>
        </div>
        
      </div>
    </section>

    <section class="step">
      <input type="checkbox" id="toggle" class="step_toggle d-none">
      <label for="toggle" class="step_ques d-flex flex-column  align-items-center cursor-pointer py-2">
        <p>第一次進來，該如何使用？</p>
      </label>
      <div class="step_ans d-flex justify-content-around">
        <div class="step_ans_wrapper">
          <h3>STEP.1</h3>
          <div class="step_ans_wrapper--item p-2 text-center">選擇餐廳</div>
        </div>
        <div class="step_ans_wrapper">
          <h3>STEP.2</h3>
          <div class="step_ans_wrapper--item p-2 text-center">選擇餐點及人數</div>
        </div>
        <div class="step_ans_wrapper">
          <h3>STEP.3</h3>
          <div class="step_ans_wrapper--item p-2 text-center">確認訂單，線上付款</div>
        </div>
        <div class="step_ans_wrapper text-center">
          <h3>STEP.4</h3>
          <div class="step_ans_wrapper--item p-2 text-center">準備用餐！</div>
        </div>
      </div>
    </section>

    <section class="restaurant wrapper pt-5">
      <div class="restaurant_title d-flex flex-column align-items-center">
        <h1>想吃什麼？</h1>
        <h3>選出最有興趣的餐廳吧！</h3>
      </div>
      <hr>
      <div class="restaurant_search d-flex justify-content-between mt-5">
        <div class="restaurant_search_filter">
          <button 
          @click="showCategoryList()"
          class="restaurant_search_filter--hamburger ml-3 mt-1">
           <p></p>
          </button>
          <ul 
          v-show="categoryList"
          class="restaurant_search_filter--list p-3 mt-1">   
            <li class="list-item p-1">日式料理</li>
            <li class="list-item p-1">燒烤</li>
            <li class="list-item p-1">酒霸</li>     
          </ul>
        </div>
        <div class="restaurant_search_form">
        <form class="restaurant_search_form--group d-flex align-items-center" action="">
          <input 
            v-model="search"
            class="item-input" 
            type="text"
            placeholder="請輸入餐廳名稱...">
          <button class="item-btn pl-4" type="submit">
            <font-awesome-icon :icon="icon.faSearch"/>
          </button>
          
        </form>
        </div>
      </div>
      <div class="restaurant_card mt-5">

        <div class="restaurant_card--item">
        <a class="card" href="#">
          <div class="card_header">
            <img src="https://images.unsplash.com/photo-1593661982469-ff1e1bbbc88d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1494&q=80" alt="">
          </div>
          <div class="card_body p-2">
            <h1 class="card_body--title">龍蝦吃到吐</h1>
            <div class="card_body--detail d-flex mt-1">
            <div>
              <span class="rating mr-2 px-1">
              <font-awesome-icon :icon="icon.faStar"/>
              5.0
              </span>
              <span class="category px-1">海鮮料理</span>
            </div>
            <p class="ml-2">
              <span>台北市</span> |
              <span>中山區</span>
            </p>
            </div>
            <hr>
            <p class="card_body--description mt-1">aps  dfjoi   jfaojfaso fjajsojn vaoi vinve inapif ninanasna anvosa enei fnaof naeaon avoas vja eofsaif adsjvas af apvjasif aiofnas aivjaivjai a aijvasvna vajapi coia caoid cdiao caiocjaidcj aoicsdij sopi sdic aoic aioc aiocj adcadj caiods caoisdcj sdaicj asoic asiod jcadcj asiocd
            </p>
          </div>
        </a>
        </div>

      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons'


export default {
  components: {
    Footer,
    FontAwesomeIcon
  },
  data () {
    return {
      categoryList: false,
      search: '',
      icon: {
        faSearch, 
        faStar 
      }
    }
  },
  methods: {
    showCategoryList () {
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
        transition: opacity .2s .2s;
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
        @extend %shadow ,%radius, %lobster;
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


  .restaurant {
    &_title {
      @extend %font;
      color: $textColor;
      h1 {
        font-size: 2rem;
      }
    }
  }
  .restaurant_search {
    &_filter--hamburger {
      width: 30px;
      height: 30px;
      p {
        @extend %radius;
        position: relative;
        width: 10px;
        height: 3px;
        background: $textColor;
        &::after, &::before {
          content: '';
          position: absolute;
          height: 3px;
          background: $textColor;
        }
        &::after {
          bottom: 8px;
          width: 20px;
          left: 0;
        }
        &::before {
          width: 30px;
          bottom: 16px;
          left: 0;
        }
      }
      &:hover {
        p {
          width: 30px;
          transition: width .3s;
          &::after {
            transition: width .3s;
            width: 30px;
          }
        }
      }
    }
    &_filter--list {
      border: 1px solid $mask;
      @extend %radius, %shadow;
      // width: 200px;
      .list-item {
        border-bottom: 1px solid darken($white, 10%);
      }
    }
    
  }
  .restaurant_search_form {
    .item-input {
      @extend %textInput;
    }
    .item-btn {
      font-size: 1.5rem;
      color: $textColor;
    }
  }
  .restaurant_card {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem 1.5rem;
    &--item {
    overflow: hidden;
    @extend %shadow, %radius;
    .card {
      color: $textColor;
    }
    .card_body {
      &--detail {
        span {
          @extend %radius;
        }
        .rating {
          color: darken($white, 5%);
          background: rgba(255, 34, 89, 0.795);
        }
        .category {
          color: darken($white, 5%);
          background: rgba(1, 168, 9, 0.788);
        }
      }
      &--description {
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
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
