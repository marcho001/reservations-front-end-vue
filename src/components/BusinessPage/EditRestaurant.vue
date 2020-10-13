<template>
  <form class="form">
    <div class="form_item">
      <label for="name">餐廳名稱：</label>
      <input 
        v-model="restaurant.name"
        type="text" 
        name="name"
        id="name" />
    </div>
    <div class="form_item">
      <label for="category">餐廳類別：</label>
      <select 
        v-model="restaurant.CategoryId"
        class="px-1" 
        name="category"
        id="category">
        <option value="" disabled selected>請選擇類別</option>
        <option value="">日式料理</option>
        <option value="">美式料理</option>
      </select>
    </div>
    <label class="form_item image position-relative" for="image">
      <img :src="restaurant.image | emptyImage" />
      <p class="image_icon text-center cursor-pointer">
        <font-awesome-icon :icon="solidIcon.faCameraRetro" />
      </p>
    </label>
    <input class="d-none" type="file" id="image" />
    <div class="form_item">
      <label for="description">餐廳描述：</label>
      <textarea
        v-model="restaurant.description" 
        class="px-2" 
        name="description"
        id="description" 
        rows="5"></textarea>
    </div>
    <div class="form_item">
      <label for="phone">電話：</label>
      <input 
        v-model="restaurant.phone"
        type="tel" 
        name="phone"
        id="phone" />
    </div>
    <div class="form_item">
      <label for="address">地址：</label>
      <input 
        v-model="restaurant.address"
        type="text" 
        name="address"
        id="address" />
    </div>
    <div class="form_item">
      <label for="open_time">營業時間：</label>
      <input 
        v-model="restaurant.open_time"
        type="text" 
        name="open_time"
        id="open_time" />
    </div>

    <div class="d-flex justify-content-end">
      <button type="submit" class="form_save mt-2">
        儲存
      </button>
    </div>
  </form>
</template>

<script>
import { emptyImageFilter } from '../../utils/mixin'
import { FontAwesomeIcon, solid } from '../../utils/icon'

export default {
  props: {
    initRestaurant: Object
  },
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      solidIcon: solid,
      restaurant: this.initRestaurant
    }
  },
  mixins: [emptyImageFilter],
  watch: {
    initRestaurant () {
      this.restaurant = {
        ...this.restaurant,
        ...this.initRestaurant
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/BusinessPage/EditRestaurant';
</style>
