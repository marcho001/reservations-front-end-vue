<template>
  <div class="container pt-4">
    <div class="restaurant wrapper">
      <RestaurantDetail :font-awesome="icon" />
      <br />
      <div class="restaurant_comments">
        <h1>評論</h1>
        <hr />
        <CreateCommentForm :font-awesome="icon" />
        <br />
        <RestaurantComments :font-awesome="icon" />
      </div>
    </div>
    <br />
    <Footer />
  </div>
</template>

<script>
import { faStar, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

//components
import Footer from '../components/Footer'
import RestaurantDetail from '../components/RestaurantPage/RestaurantDetail'
import CreateCommentForm from '../components/RestaurantPage/CreateCommentForm'
import RestaurantComments from '../components/RestaurantPage/RestraurantComments'

export default {
  components: {
    RestaurantDetail,
    CreateCommentForm,
    RestaurantComments,
    Footer
  },
  data() {
    return {
      icon: { faStar, farStar, faMapMarkedAlt }
    }
  }
}
</script>

<style lang="scss" scoped>
.restaurant_comments {
  color: $textColor;
}
</style>
