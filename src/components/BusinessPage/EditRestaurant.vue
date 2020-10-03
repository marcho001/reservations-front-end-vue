<template>
  <form class="form">
    <div class="form_item">
      <label for="name">餐廳名稱：</label>
      <input type="text" id="name" />
    </div>
    <div class="form_item">
    <label for="category">餐廳類別：</label>
      <select class="px-1" id="category">
        <option value="" disabled selected>請選擇類別</option>
        <option value="">日式料理</option>
        <option value="">美式料理</option>
      </select>
    </div>
    <label class="form_item image position-relative" for="image">
      <img 
      :src="restaurant.image | emptyImage" />
      <p class="image_icon text-center cursor-pointer">
        <font-awesome-icon :icon="solidIcon.faCameraRetro" />
      </p>
    </label>
    <input class="d-none" type="file" id="image" />
    <div class="form_item">
      <label for="description">餐廳描述：</label>
      <textarea class="px-2" id="description" rows="5"></textarea>
    </div>
    <div class="form_item">
      <label for="phone">電話：</label>
      <input type="tel" id="phone" />
    </div>
    <div class="form_item">
      <label for="location">地址：</label>
      <input type="tel" id="location" />
    </div>
    <div class="form_item">
      <label for="open_time">營業時間：</label>
      <input type="tel" id="open_time" />
    </div>
    
    <div class="d-flex justify-content-end">
      <button class="form_save mt-2">
        儲存
      </button>
    </div>
  </form>
</template>

<script>
import { emptyImageFilter } from '../../utils/mixin'
import { FontAwesomeIcon, solid } from '../../utils/icon'

export default {
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      solidIcon: solid,
      restaurant: {
        image: ''
      }
    }
  },
  mixins: [emptyImageFilter]
}

</script>

<style lang="scss" scoped>
@import '@/assets/css/components/BusinessPage/EditRestaurant';
</style>
