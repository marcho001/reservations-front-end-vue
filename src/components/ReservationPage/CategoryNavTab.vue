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
        <router-link
          :to="{ name: 'reservation' }"
          :class="{ active: MealCategoryId === '' }"
          class="group_item m-1"
          >全部</router-link
        >
        <router-link
          v-for="category in categories"
          :key="category.id"
          :to="{
            name: 'reservation',
            query: { MealCategory: category.id }
          }"
          :class="{ active: MealCategoryId === category.id }"
          class="group_item m-1"
        >
          {{ category.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon, solid } from '../../utils/icon'
export default {
  props: {
    categories: Array
  },
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      showCategory: true,
      solidIcon: solid,
      MealCategoryId: 1
    }
  },
  methods: {
    toggleCategoryList() {
      this.showCategory = !this.showCategory
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/ReservationPage/CategoryNavTab';
</style>
