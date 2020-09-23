<template> 
  <div class="d-flex justify-content-between mt-5">
      <div class="filter position-relative">
        <button
          @click="showCategoryList()"
          class="filter_hamburger ml-3 mt-1"
        >
        <p class="border"></p>
        </button>
        <ul
          v-show="categoryList"
          class="filter_list p-3 mt-1 position-absolute"
        >
          <li class="filter_list_item p-1">日式料理</li>
          <li class="filter_list_item p-1">燒烤</li>
          <li class="filter_list_item p-1">酒霸</li>
        </ul>
      </div>
        <form
          class="search d-flex align-items-center"
          action=""
        >
          <input
            v-model="search"
            class="search_input"
            type="text"
            placeholder="請輸入餐廳名稱..."
          />
          <button class="search_btn pl-4" type="submit">
            <font-awesome-icon :icon="solidIcon.faSearch" />
          </button>
        </form>
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
      categoryList: false,
      search: '',
      solidIcon: solid
    }
  },
  methods: {
    showCategoryList() {  
      this.categoryList = !this.categoryList
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/components/HomePage/FilterAndSearch';
</style>
