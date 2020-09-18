<template>
<div>
  <div class="restaurant_info d-flex flex-column align-items-center justify-content-center">
      <h1 class="restaurant_info--title">龍蝦吃到吐</h1>
      <div class="restaurant_info_detail mt-2 d-flex justify-content-center align-items-center">
          <span class="restaurant_info_detail--rating mr-3 px-1">
            <font-awesome-icon :icon="fontAwesome.faStar"/>
            4.2
          </span>
          <span class="restaurant_info_detail--category mr-3 px-1">海鮮料理</span>
        <p class="restaurant_info_detail--address m-1">
        <font-awesome-icon :icon="fontAwesome.faMapMarkedAlt"/>
        台北市中山區明水路3000號
        </p>
      </div>
    </div>
    <hr>
    <br>
    <div class="restaurant_description">
      <div class="restaurant_description_section">
        <div class="restaurant_description_section--album">
          <img src="../../assets/image/background.jpeg" alt="">
        </div>
        <br>
        <div class="restaurant_description_section--text">
          <p>isdjfisjfisjdifjsifs ajsif ajsidjfa sdjfa isaisjf iasaisjd fias jfis faisd jfidsjfaisd jfiasd jfiasdjfias jfai sdfjiasd fiasdjfia sdjias ifjds </p>
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
  props: {
    fontAwesome: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/components/RestaurantPage/RestaurantDetail';
</style>
