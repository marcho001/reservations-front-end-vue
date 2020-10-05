<template>
  <div class="restaurant_card mt-5">
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="restaurant_card--item"
    >
      <router-link
        :to="{
          name: 'restaurant',
          params: { id: restaurant.id }
        }"
        class="card"
      >
        <div class="card_header">
          <img :src="restaurant.image" />
        </div>
        <div class="card_body p-2">
          <h1 class="card_body--title">
            {{ restaurant.name }}
          </h1>
          <p class="my-2">營業時間：{{ restaurant.open_time }}</p>
          <p class="my-2">平均價位：{{ restaurant.price }}</p>
          <div class="card_body--detail d-flex mt-1">
            <div>
              <span class="rating mr-2 px-1">
                <font-awesome-icon :icon="solidIcon.faStar" />
                {{ restaurant.ratingAve }}
              </span>
              <span class="category px-1">
                {{ restaurant.Category.name }}
              </span>
            </div>
            <p class="ml-2">
              <span>{{ restaurant.City.name }}</span> |
              <span>{{ restaurant.City.area }}</span>
            </p>
          </div>
          <hr />
          <p class="card_body--description mt-1">
            {{ restaurant.description }}
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon, solid } from '../../utils/icon'

export default {
  props: {
    restaurants: {
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
@import '../../assets/css/components/HomePage/RestaurantCard.scss';
</style>
