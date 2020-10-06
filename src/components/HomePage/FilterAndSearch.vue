<template>
  <div class="d-flex justify-content-between mt-5">
    <div class="filter position-relative">
      <button
        @click="categoryList = !categoryList"
        class="filter_hamburger ml-3 mt-1"
      >
        <p class="border"></p>
      </button>
      <form
        v-show="categoryList"
        @mouseleave="categoryList = false" 
        class="filter_list p-3 mt-1 position-absolute d-flex">
        <div class="d-flex flex-column w-50">
          <label 
            class="filter_list_item p-1"
            for="categories">全部類別
            <input 
              v-model="queryItem['CategoryId']"
              class="d-none" 
              type="radio" 
              name="category"
              value="" 
              id="categories">
          </label>
          <label 
            v-for="category in categories"
            :key="category.id"
            :for="category.name"
            :class="{ active: categoryId === category.id }"
            class="filter_list_item p-1">
              {{category.name}}
            <input 
              :id="category.name"
              :value="category.id" 
              v-model="queryItem['CategoryId']"
              class="d-none" 
              type="radio" 
              name="category" >
          </label>
        </div>
        <div class="d-flex flex-column w-50">
          <label 
            class="filter_list_item p-1"
            for="cities">全部區域
            <input
              v-model="queryItem['CityId']" 
              class="d-none" 
              type="radio" 
              name="city"
              value="" 
              id="cities">
          </label>
          <label 
            v-for="city in cities"
            :key="city.id"
            :for="city.area"
            class="filter_list_item p-1">
            {{city.area}}
            <input
              :value="city.id" 
              :id="city.area"
              v-model="queryItem['CityId']" 
              class="d-none" 
              type="radio" 
              name="city" 
              >
          </label>
        </div>     
      </form>
    </div>
    <form
      @submit.prevent="handleSubmit"
      class="search d-flex align-items-center"
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
  props: {
    categoryId: {
      type: [String, Number]
    },
    cityId: {
      type: [String, Number]
    },
    categories: {
      type: Array
    },
    cities: {
      type: Array
    }
  },
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      categoryList: false,
      search: '',
      solidIcon: solid,
      queryItem: {
        CategoryId: '',
        CityId: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('after-search', {
        Search: this.search
      })
      this.search = ''
    }
  },
  watch: {
    queryItem: {
      handler () {
        this.categoryList = false
        this.$emit('query-change', this.queryItem)
      },
      deep: true
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/components/HomePage/FilterAndSearch';
</style>
