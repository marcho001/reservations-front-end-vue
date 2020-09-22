<template>
  <div class="reservation_navTab my-4">
      <input
        type="checkbox"
        class="navTab--toggle d-none"
        :checked="showCategory"
      />
      <div class="navTab position-relative">
        <button
          @click="toggleCategoryList"
          class="navTab_button position-absolute p-2 text-center"
        >
          <font-awesome-icon :icon="solidIcon.faListUl" />
        </button>
        <div class="group d-flex justify-content-around p-2">
          <a href="#" class="group_item active m-1">全部</a>
          <a href="#" class="group_item m-1">牛肉</a>
          <a href="#" class="group_item m-1">牛肉</a>
          <a href="#" class="group_item m-1">牛肉</a>
          <a href="#" class="group_item m-1">牛肉</a>
          <a href="#" class="group_item m-1">牛肉</a>
          <a href="#" class="group_item m-1">豬肉</a>
          <a href="#" class="group_item m-1">羊肉</a>
          <a href="#" class="group_item m-1">肌肉</a>
        </div>
      </div>
    </div>
</template>

<script>
import { FontAwesomeIcon, solid } from '../../utils/icon'
export default {
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      showCategory: true,
      solidIcon: solid
    }
  },
  methods: {
    toggleCategoryList () {
      this.showCategory = !this.showCategory
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/ReservationPage/CategoryNavTab';
</style>
