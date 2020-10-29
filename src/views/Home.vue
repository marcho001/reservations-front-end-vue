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
        @after-search="handleAfterSearch"
      />

      <Spinner v-if="isLoading" />
      <template v-else>
        <RestaurantCard :restaurants="restaurants" />
      </template>
    </section>
    <Pagination
      v-show="!isLoading"
      :category-id="CategoryId"
      :city-id="CityId"
      :current-page="page"
      :total-page="totalPage"
      :name="'home'"
    />

    <Footer />
  </div>
</template>

<script>
import StepFollowing from '../components/HomePage/StepFollowing'
import FilterAndSearch from '../components/HomePage/FilterAndSearch'
import RestaurantCard from '../components/HomePage/RestaurantCard'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'
import Spinner from '../components/Spinner'
import restAPI from '../api/restAPI'
import { Toast } from '../utils/helpers'

export default {
  components: {
    StepFollowing,
    FilterAndSearch,
    RestaurantCard,
    Pagination,
    Footer,
    Spinner
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      cities: [],
      CategoryId: '',
      CityId: '',
      page: -1,
      totalPage: [],
      prev: -1,
      next: -1,
      isLoading: true
    }
  },
  methods: {
    async fetchHome({ queryPage, queryCategoryId, queryCityId, querySearch }) {
      try {
        // 向 api get 資料
        const res = await restAPI.getHome({
          page: queryPage,
          CategoryId: queryCategoryId,
          CityId: queryCityId,
          search: querySearch
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
          next
        } = res.data

        this.CategoryId = CategoryId
        this.restaurants = restaurants
        this.categories = categories
        this.cities = cities
        this.CityId = CityId
        this.page = page
        this.totalPage = totalPage
        this.prev = prev
        this.next = next
        this.isLoading = false
      } catch (err) {
        Toast.fire({
          icon: 'warning',
          title: '無法取得資料，請稍後再試'
        })
        this.isLoading = false
      }
    },
    handleAfterSearch(payload) {
      const { Search = '' } = payload
      this.$router.push({
        name: 'home',
        query: { search: Search }
      })
    }
  },
  created() {
    // 取得當前網址的 query, categoryId
    const {
      page = '',
      CategoryId = '',
      CityId = '',
      search = ''
    } = this.$route.query
    this.fetchHome({
      queryPage: page,
      queryCategoryId: CategoryId,
      queryCityId: CityId,
      querySearch: search
    })
  },
  beforeRouteUpdate(to, from, next) {
    const { page = '', CategoryId = '', CityId = '', search = '' } = to.query
    this.fetchHome({
      queryPage: page,
      queryCategoryId: CategoryId,
      queryCityId: CityId,
      querySearch: search
    })
    next()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/pages/Home';
</style>
