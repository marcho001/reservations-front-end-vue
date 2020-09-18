<template>
  <div class="restaurant_comments_allComments scroll">
    
      <div class="restaurant_comments_allComments--item d-flex align-items-center py-3">
        <img src="../../assets/logo.png" alt="">
        <div>
          <div class="user-info pl-3 mb-2 d-flex">
            <h3 class="mr-3">章魚哥</h3>
            <h3 class="rating">
              4 <font-awesome-icon :icon="fontAwesome.faStar"/>
            </h3>
          </div>
          <p class="comment pl-3">efefeefefefef</p>
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
  },
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/components/RestaurantPage/RestaurantComments';
</style>
