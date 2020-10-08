<template>
  <div class="d-flex justify-content-between mt-5">
    <div class="filter position-relative">
      <button
        @click="categoryList = !categoryList"
        class="filter_hamburger ml-3 mt-1"
      >
        <p class="border"></p>
      </button>
      <div
        v-show="categoryList"
        @mouseleave="categoryList = false"
        class="filter_list p-3 mt-1 position-absolute d-flex"
        >
        <ul class="w-50">
          <li class="filter_list_item p-1">
            <router-link
              :to="{ name: 'home' }"
              @click.native="categoryList = false"
              class="filter_list_item--link"
            >
              全部
            </router-link>
          </li>
          <li
             v-for="category in categories"
            :key="category.id"
            class="filter_list_item p-1"
          >
          <router-link
              @click.native="categoryList = false"
              class="filter_list_item--link"
              :class="{ active: categoryId === category.id }"
              :to="{ name: 'home', query: { CategoryId: category.id } }"
              >{{ category.name }}</router-link>
          </li>
          </ul>
        <ul class="w-50">
          <li
             v-for="city in cities"
            :key="city.id"
            class="filter_list_item p-1"
          >
            <router-link
              @click.native="categoryList = false"
              class="filter_list_item--link"
              :class="{ active: cityId === city.id }"
              :to="{ name: 'home', query: { CityId: city.id } }"
              >{{ city.area }}</router-link
            >
          </li>
        </ul>
      </div>
      
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
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('after-search', {
        Search: this.search
      })
      this.search = ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/components/HomePage/FilterAndSearch';
</style>
