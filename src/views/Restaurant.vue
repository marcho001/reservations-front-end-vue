<template>
  <div class="container pt-4">
    <div class="restaurant wrapper">
      <RestaurantDetail 
        :restaurant="restaurant"
        :init-is-favorited="isFavorited"/>
      <br />
      <br />
      <div class="restaurant_comments">
        <h1>評論</h1>
        <hr />
        <CreateCommentForm
          @after-create-comment="afterCreateComment"         
          :restaurant-id="restaurant.id"
        />
        <br />
        <RestaurantComments/>
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

const fakeRest = {
  restaurant: {
    id: 3,
    name: '龍蝦吃到吐',
    rating: 4.2,
    address: '台北市中山區明水路3000號',
    phone: '02-0000000',
    image: '',
    description: 'asfasdfasfasdfasdfa',
    Category: {
      id: 1,
      name: '海鮮料理'
    },
    Comments: {}
  },
  isFavorited: false
}

export default {
  components: {
    RestaurantDetail,
    CreateCommentForm,
    RestaurantComments,
    Footer
  },
  data() {
    return {
      restaurant: {
        id: 0,
        name: '',
        rating: 0,
        address: '',
        image: '',
        description: '',
        Category: {
          id: 0,
          name: ''
        },
        Comments: {},
      },
      isFavorited: false
    }
  },
  methods: {
    fetchRestaurant() {
      this.restaurant = {
        ...this.restaurant,
        ...fakeRest.restaurant
      }
    },
    afterCreateComment(data) {
      console.log(data)
    }
  },
  created() {
    this.fetchRestaurant()
  }
}
</script>

<style lang="scss" scoped>
.restaurant_comments {
  color: $textColor;
}
</style>
