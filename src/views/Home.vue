<template>
  <div class="container">
    <section class="banner">
      <div
        class="banner_wrapper d-flex flex-column justify-content-center align-items-end p-4"
      >
        <div class="mr-4">
          <p class="my-3">還在為了美食等待？</p>
          <p class="">總是有人看著菜單猶豫不決？</p>
          <br />
          <h1 class="mt-4">立即點餐訂位</h1>
          <h1>STOP WAITING !</h1>
        </div>
      </div>
    </section>

    <StepFollowing />

    <section class="restaurant wrapper pt-5">
      <div class="restaurant_title d-flex flex-column align-items-center">
        <h1>想吃什麼？</h1>
        <h3>選出最有興趣的餐廳吧！</h3>
      </div>
      <hr />

      <FilterAndSearch 
        :category-id="CategoryId"
        :city-id="CityId"
        :categories="categories"
        :cities="cities"
        @after-search="handleAfterSearch"/>

      <RestaurantCard 
        :restaurants="restaurants.rows"/>
    </section>

    <Footer />
  </div>
</template>

<script>
import StepFollowing from '../components/HomePage/StepFollowing'
import FilterAndSearch from '../components/HomePage/FilterAndSearch'
import RestaurantCard from '../components/HomePage/RestaurantCard'
import Footer from '../components/Footer'
import userAPI from '../api/user'
import { Toast } from '../utils/helpers'

export default {
  components: {
    StepFollowing,
    FilterAndSearch,
    RestaurantCard,
    Footer
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      cities: [],
      CategoryId: "",
      CityId: "",
      page: -1,
      totalPage: [],
      prev: -1,
      next: -1
    }
  },
  methods: {
    async fetchHome ({ queryPage, queryCategoryId, queryCityId }) {
      try {
        // 向 api get 資料
        const res = await userAPI.getHome({ 
          page: queryPage, 
          CategoryId: queryCategoryId,
          CityId: queryCityId
          })
        // 驗證回應
        if (res.status !== 200) throw new Error()
        const {
          restaurants,
          categories,
          cities,
          CityId,
          CategoryId,
          page,
          totalPage,
          prev,
          next } = res.data
        
        this.CategoryId = CategoryId
        this.restaurants = restaurants
        this.categories = categories
        this.cities = cities
        this.CityId = CityId
        this.page = page
        this.totalPage = totalPage
        this.prev = prev
        this.next = next
      } catch (err) {
        Toast.fire({
          icon: 'warning',
          title: '無法取得資料，請稍後再試'
        })
      }
    },
    handleAfterSearch (search) {
      console.log(search)
    }
  },
  created () {
    // 取得當前網址的 query, categoryId
    const { page = "", CategoryId = "", CityId = "" } = this.$route.query
    this.fetchHome({
      queryPage: page, 
      queryCategoryId: CategoryId,
      queryCityId: CityId
      })
  },
  beforeRouteUpdate (to,from, next) {
    const { page = "", CategoryId = "", CityId = "" } = to.query
    this.fetchHome({
      queryPage: page,
      queryCategoryId: CategoryId,
      queryCityId: CityId
    })
    next()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/pages/Home';
</style>
