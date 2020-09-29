<template>
  <div class="comments scroll">
    <div
      v-for="comment in comments"
      :key="comment.id"
      class="comments_item d-flex align-items-center py-3"
    >
      <img src="../../assets/logo.png"/>
      <div>
        <div class="user-info pl-3 mb-2 d-flex">
          <h3 class="mr-3">章魚哥</h3>
          <h3 class="rating">
            {{ comment.rating }} <font-awesome-icon :icon="solidIcon.faStar" />
          </h3>
        </div>
        <p class="pl-3">
          {{ comment.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon, solid } from '../../utils/icon'
export default {
  props: {
    comments: {
      type: Array
    }
  },
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      solidIcon: solid
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/components/RestaurantPage/RestaurantComments';
</style>
