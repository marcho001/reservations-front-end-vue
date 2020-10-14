<template>
  <div class="d-flex justify-content-center my-4">
    <ul class="page d-flex">
      <li class="page_item p-2">
        <router-link
          class="page_item_link"
          v-show="previousPage"
          :to="{
            name: 'home',
            query: {
              CityId: cityId,
              CategoryId: categoryId,
              page: previousPage
            }
          }"
        >
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>
      <li
        v-for="page in totalPage"
        :key="page"
        :class="{ active: currentPage === page }"
        class="page_item m-2"
      >
        <router-link
          class="page_item_link px-2"
          :to="{
            name: 'home',
            query: { CityId: cityId, CategoryId: categoryId, page }
          }"
        >
          {{ page }}
        </router-link>
      </li>
      <li class="page_item p-2">
        <router-link
          class="page_item_link"
          v-show="nextPage"
          :to="{
            name: 'home',
            query: {
              CityId: cityId,
              CategoryId: categoryId,
              page: nextPage
            }
          }"
        >
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    categoryId: [String, Number],
    cityId: [String, Number],
    currentPage: Number,
    totalPage: Array
  },
  computed: {
    previousPage() {
      return this.currentPage === 1 ? null : this.currentPage - 1
    },
    nextPage() {
      return this.currentPage + 1 > this.totalPage.length
        ? null
        : this.currentPage + 1
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/components/Pagination';
</style>
