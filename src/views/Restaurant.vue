<template>
  <div class="container pt-4">
    <div class="restaurant wrapper">
      <RestaurantDetail
        :rating="ratingAve"
        :restaurant="restaurant"
        :init-is-favorited="isFavorited"
      />
      <br />
      <br />
      <div class="restaurant_comments">
        <h1>評論</h1>
        <hr />
        <CreateCommentForm
          @after-create-comment="afterCreateComment"
          :restaurant-id="restaurant.id"
          :current-user-id="currentUser.id"
        />
        <br />
        <RestaurantComments 
          :comments="restaurant.Comments"/>
      </div>
    </div>
    <br />
    <Footer />
  </div>
</template>

<script>
//components
import Footer from '../components/Footer'
import RestaurantDetail from '../components/RestaurantPage/RestaurantDetail'
import CreateCommentForm from '../components/RestaurantPage/CreateCommentForm'
import RestaurantComments from '../components/RestaurantPage/RestraurantComments'

import { Toast } from '../utils/helpers'
import restAPI from '../api/restAPI'
import commentAPI from '../api/commentAPI'
import { mapState } from 'vuex'



export default {
  components: {
    RestaurantDetail,
    CreateCommentForm,
    RestaurantComments,
    Footer
  },
  data() {
    return {
      ratingAve: '',
      restaurant: {
        id: 0,
        name: '',
        address: '',
        image: '',
        description: '',
        Category: {},
        City: {},
        Comments: [],
        open_time: '',
        price: ''
      },
      isFavorited: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async fetchRestaurant(id) {
      try {
        const res = await restAPI.getRest(id)
        const { ratingAve, restaurant } = res.data
        this.ratingAve = ratingAve
        this.restaurant = {
          ...this.restaurant,
          ...restaurant
        }
      } catch (err) {
        console.error(err)
        Toast.fire({
          icon: 'warning',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    async afterCreateComment(payload) {
      try {
        const { data } = await commentAPI.postComment(payload)
        if (data.status !== 'success') throw new Error()
        this.restaurant.Comments.push({
          ...payload,
          User: {
            image: this.currentUser.image,
            name: this.currentUser.name
          }
        })
      } catch (err) {
        console.error(err)
        Toast.fire({
          icon: 'error',
          title: '無法新增評論，請稍後再試'
        })
      }
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  }
}
</script>

<style lang="scss" scoped>
.restaurant_comments {
  color: $textColor;
}
</style>
