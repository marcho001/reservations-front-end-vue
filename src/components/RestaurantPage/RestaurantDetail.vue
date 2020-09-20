<template>
  <div class="restaurant_detail">
    <div class="d-flex flex-column">
      <h1 class="restaurant_detail_title">龍蝦吃到吐</h1>
      <p class="restaurant_detail_tag mt-1">
        <span class="rating mr-3 px-1">
          <font-awesome-icon :icon="solidIcon.faStar" />
          4.2
        </span>
        <span class="category mr-3 px-1">海鮮料理</span>
      </p>
    </div>
    <hr />
    <br />
      <div class="restaurant_detail_album">
        <img src="../../assets/image/background.jpeg" alt="" />
      </div>
        <br />
          <p class="restaurant_detail_description">
            isdjfisjfisjdifjsifs ajsif ajsidjfa sdjfa isaisjf iasaisjd fias jfis
            faisd jfidsjfaisd jfiasd jfiasdjfias jfai sdfjiasd fiasdjfia sdjias
            ifjds
          </p>
          <br/>
      <div class="restaurant_detail_info">
        <div class="info d-flex justify-content-between">
          <h1>餐廳資訊</h1>
          <div class="mb-2 align-self-end">
            <button class="btn btn--blue mr-3">訂位點餐</button>
            <button class="btn btn--add">加入收藏</button>
            <button class="btn btn--remove">取消蒐藏</button>
          </div>
        </div>
        <hr>
          <p class="m-1">
            <font-awesome-icon :icon="solidIcon.faMapMarkedAlt" />
            台北市中山區明水路3000號
          </p>
          <p class="m-1">
            <font-awesome-icon :icon="solidIcon.faPhone" />
            02-3434223
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
  data () {
    return {
      solidIcon: solid
    }
  },
  mixins: [emptyImageFilter]
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/components/RestaurantPage/RestaurantDetail';
</style>
