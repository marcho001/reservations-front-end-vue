<template>
  <div 
    @click.self="toggleEditForm"
    class="menu_form d-flex justify-content-center align-items-center position-fixed">
        <form class="form p-4 scroll">
          <label class="form_item image position-relative" for="image">
            <img 
            :src="'' | emptyImage" />
            <p class="image_icon text-center cursor-pointer">
              <font-awesome-icon :icon="solidIcon.faCameraRetro" />
            </p>
          </label>
          <input class="d-none" type="file" id="image" />
          <div class="form_item">
      <label for="name">餐點名稱：</label>
      <input type="text" id="name" />
    </div>
    <div class="form_item">
    <label for="category">餐點類別：</label>
      <select class="px-1" id="category">
        <option value="" disabled selected>請選擇類別</option>
        <option value="">牛肉</option>
        <option value="">豬肉</option>
      </select>
    </div>
    <div class="form_item">
      <label for="description">
      餐點描述：<br> 0/50
      
      </label>
      <textarea class="p-2" id="description" rows="3"></textarea>
    </div>
    <div class="form_item">
      <label for="price">售價：</label>
      <input type="number" id="price" />
    </div>
    <div class="form_item">
      <label for="status">是否上架：
        <input type="checkbox" id="status" />
      </label>
    </div>
    <div class="d-flex justify-content-end">
      <button class="form_save mt-2">
        儲存
      </button>
    </div>
        </form>
      </div>
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
      solidIcon: solid
    }
  },
  mixins: [emptyImageFilter],
  methods: {
    toggleEditForm () {
      this.$emit('after-toggle-edit-form')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/BusinessPage/EditMenuForm';
</style>
