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

      <FilterAndSearch />

      <RestaurantCard />
    </section>

    <Footer />
  </div>
</template>

<script>
import StepFollowing from '../components/HomePage/StepFollowing'
import FilterAndSearch from '../components/HomePage/FilterAndSearch'
import RestaurantCard from '../components/HomePage/RestaurantCard'
import Footer from '../components/Footer'

export default {
  components: {
    StepFollowing,
    FilterAndSearch,
    RestaurantCard,
    Footer
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/pages/Home';
</style>
