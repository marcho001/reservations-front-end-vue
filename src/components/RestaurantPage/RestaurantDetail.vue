<template>
  <div class="restaurant_detail">
    <div class="d-flex flex-column">
      <h1 class="restaurant_detail_title">{{ restaurant.name }}</h1>
      <p class="restaurant_detail_tag mt-1">
        <span class="rating mr-3 px-1">
          <font-awesome-icon :icon="solidIcon.faStar" />
          {{ restaurant.rating }}
        </span>
        <span class="category mr-3 px-1">{{ restaurant.Category.name }}</span>
      </p>
    </div>
    <hr />
    <br />
      <div class="restaurant_detail_album">
        <img 
          :src="restaurant.image | emptyImage" />
      </div>
        <br />
          <p class="restaurant_detail_description">
            {{ restaurant.description }}
          </p>
          <br/>
      <div class="restaurant_detail_info">
        <div class="info d-flex justify-content-between">
          <h1>餐廳資訊</h1>
          <div class="mb-2 align-self-end">
            <button class="btn btn--blue mr-3">訂位點餐</button>
            <button 
              v-if="isFavorited === true"
              class="btn btn--remove"
              >取消蒐藏</button>
            <button 
              v-else
              class="btn btn--add"
              >加入收藏</button>
          </div>
        </div>
        <hr>
          <p class="m-1">
            <font-awesome-icon :icon="solidIcon.faMapMarkedAlt" />
            {{ restaurant.address }}
          </p>
          <p class="m-1">
            <font-awesome-icon :icon="solidIcon.faPhone" />
            {{ restaurant.phone }}
          </p>
      </div>
  </div>
</template>
<script>
import { FontAwesomeIcon, solid } from '../../utils/icon'
import { emptyImageFilter } from '../../utils/mixin'
export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    restaurant: {
      type: Object
    },
    initIsFavorited: {
      type: Boolean
    }
  },
  data () {
    return {
      solidIcon: solid,
      isFavorited: this.initIsFavorited
    }
  },
  mixins: [emptyImageFilter],
  
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/components/RestaurantPage/RestaurantDetail';
</style>
