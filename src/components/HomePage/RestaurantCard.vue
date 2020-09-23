<template>
  <section class="restaurant wrapper pt-5">
    <div class="restaurant_title d-flex flex-column align-items-center">
      <h1>想吃什麼？</h1>
      <h3>選出最有興趣的餐廳吧！</h3>
    </div>
    <hr />
    <div class="restaurant_search d-flex justify-content-between mt-5">
      <div class="restaurant_search_filter position-relative">
        <button
          @click="showCategoryList()"
          class="restaurant_search_filter--hamburger ml-3 mt-1"
        >
          <p></p>
        </button>
        <ul
          v-show="categoryList"
          class="restaurant_search_filter--list p-3 mt-1 position-absolute"
        >
          <li class="list-item p-1">日式料理</li>
          <li class="list-item p-1">燒烤</li>
          <li class="list-item p-1">酒霸</li>
        </ul>
      </div>
      <div class="restaurant_search_form">
        <form
          class="restaurant_search_form--group d-flex align-items-center"
          action=""
        >
          <input
            v-model="search"
            class="item-input"
            type="text"
            placeholder="請輸入餐廳名稱..."
          />
          <button class="item-btn pl-4" type="submit">
            <font-awesome-icon :icon="solidIcon.faSearch" />
          </button>
        </form>
      </div>
    </div>
    <div class="restaurant_card mt-5">
      <div class="restaurant_card--item">
        <a class="card" href="#">
          <div class="card_header">
            <img
              src="https://images.unsplash.com/photo-1593661982469-ff1e1bbbc88d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1494&q=80"
              alt=""
            />
          </div>
          <div class="card_body p-2">
            <h1 class="card_body--title">龍蝦吃到吐</h1>
            <div class="card_body--detail d-flex mt-1">
              <div>
                <span class="rating mr-2 px-1">
                  <font-awesome-icon :icon="solidIcon.faStar" />
                  5.0
                </span>
                <span class="category px-1">海鮮料理</span>
              </div>
              <p class="ml-2">
                <span>台北市</span> |
                <span>中山區</span>
              </p>
            </div>
            <hr />
            <p class="card_body--description mt-1">
              aps dfjoi jfaojfaso fjajsojn vaoi vinve inapif ninanasna anvosa
              enei fnaof naeaon avoas vja eofsaif adsjvas af apvjasif aiofnas
              aivjaivjai a aijvasvna vajapi coia caoid cdiao caiocjaidcj
              aoicsdij sopi sdic aoic aioc aiocj adcadj caiods caoisdcj sdaicj
              asoic asiod jcadcj asiocd
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon, solid } from '../../utils/icon'

export default {
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      categoryList: false,
      search: '',
      solidIcon: solid
    }
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
@import '../../assets/css/components/HomePage/RestaurantCard.scss';
</style>
