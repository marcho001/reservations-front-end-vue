<template>
  <div class="container">
    <div class="space-40"></div>
    <div class="business_wrapper">
      <UserNavTab :tabs="tabs" />
      <div class="wrapper">
        <Spinner v-if="isLoading" />
        <template v-else>
          <EditRestaurant
            v-if="nowPage === 'restaurant'"
            @after-submit-update-restaurant="afterUpdateRestaurant"
            :init-restaurant="restaurant"
            :categories="category"
          />
          <template v-else>
            <div class="d-flex">
              <button @click="toggleEditForm" class="create m-4">
                新增餐點
              </button>
            </div>
            <hr />
            <div class="menu d-grid p-2">
              <MenuCard
                v-for="meal in menu.meals"
                @after-edit-meal-form="afterEditMealForm"
                @after-patch-sale="afterPatchSale"
                :key="meal.id"
                :meal="meal"
                :is-processing="isProcessing"
              />
            </div>
            <Pagination :current-page="menu.page" :totalPage="menu.totalPage" />
            <EditMenuForm
              @after-toggle-edit-form="afterToggleEditForm"
              @after-submit-create-meal="afterSubmitCreate"
              @after-submit-update-meal="afterSubmitUpdate"
              :meal-category="menu.mealCategory"
              :init-meal="meal"
              v-show="editMenu"
            />
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import UserNavTab from '../components/UserNavTab'
import EditRestaurant from '../components/BusinessPage/EditRestaurant'
import MenuCard from '../components/BusinessPage/MenuCard'
import EditMenuForm from '../components/BusinessPage/EditMenuForm'
import Pagination from '../components/Pagination'
import Spinner from '../components/Spinner'
import businessAPI from '../api/businessAPI'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

export default {
  components: {
    UserNavTab,
    EditRestaurant,
    MenuCard,
    Pagination,
    EditMenuForm,
    Spinner
  },
  data() {
    return {
      nowPage: 'menu',
      editMenu: false,
      isProcessing: false,
      isLoading: true,
      tabs: [
        {
          name: '編輯餐廳',
          pathName: 'business',
          paramsName: 'restaurant'
        },
        {
          name: '編輯菜單',
          pathName: 'business',
          paramsName: 'menu'
        },
        {
          name: '訂位表',
          pathName: 'business',
          paramsName: 'calendar'
        }
      ],
      category: [],
      restaurant: {
        id: -1,
        name: '',
        CategoryId: -1,
        address: '',
        description: '',
        open_time: '',
        phone: '',
        image: ''
      },
      menu: {
        mealCategory: [],
        meals: [],
        next: 2,
        page: 1,
        prev: 1,
        totalPage: []
      },
      meal: {
        id: '',
        MealCategoryId: '',
        RestaurantId: '',
        description: '',
        image: '',
        isSale: false,
        name: '',
        price: ''
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async fetchRestaurant() {
      try {
        const { data, stateText } = await businessAPI.getRestaurant()
        if (stateText === 'error') {
          throw new Error()
        }
        this.restaurant = {
          ...this.restaurant,
          ...data.restaurant
        }
        this.category = data.category
        this.isLoading = false
      } catch (err) {
        console.error(err)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳，請稍後再試'
        })
        this.isLoading = false
      }
    },
    async fetchMenu({ queryPage }) {
      try {
        const { data, statusText } = await businessAPI.getMenu({
          page: queryPage
        })
        if (statusText === 'error') {
          throw new Error()
        }
        this.menu = {
          ...this.menu,
          ...data,
          meals: data.meals.rows
        }
        this.isLoading = false
      } catch (err) {
        console.error(err)
        Toast.fire({
          icon: 'error',
          title: '無法取得菜單，請稍後再試'
        })
        this.isLoading = false
      }
    },
    afterToggleEditForm() {
      this.editMenu = false
    },
    toggleEditForm() {
      const meal = {
        MealId: '',
        MealCategoryId: '',
        RestaurantId: '',
        description: '',
        image: '',
        isSale: false,
        mealCategoryId: '',
        name: '',
        price: ''
      }
      this.meal = {
        ...this.meal,
        ...meal
      }
      this.editMenu = true
    },
    afterEditMealForm(payload) {
      this.meal = {
        ...this.meal,
        ...payload
      }
      this.editMenu = true
    },
    async afterSubmitCreate(payload) {
      try {
        const { data } = await businessAPI.postMeal(payload.formData)

        if (data.status !== 'success') {
          this.editMenu = false
          throw new Error(data.message)
        }

        this.menu.meals.push(payload.meal)
        this.editMenu = false
      } catch (err) {
        console.error(err)
        Toast.fire({
          icon: 'error',
          title: '無法新增餐點，請稍後再試'
        })
      }
    },
    async afterSubmitUpdate(payload) {
      try {
        const { data } = await businessAPI.putMeal(payload.formData)
        if (data.status !== 'success') {
          this.editMenu = false
          throw new Error(data.message)
        }
        const index = this.menu.meals.findIndex(
          item => item.id === payload.meal.id
        )
        this.menu.meals[index] = payload.meal
        this.editMenu = false
      } catch (err) {
        console.error(err)
        Toast.fire({
          icon: 'error',
          title: '無法更新餐點，請稍後再試'
        })
      }
    },
    async afterUpdateRestaurant(payload) {
      try {
        const { data } = await businessAPI.putRestaurant(payload)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.$router.push({
          name: 'restaurant',
          params: { id: this.currentUser.RestaurantId }
        })
      } catch (err) {
        console.error(err)
        Toast.fire({
          icon: 'error',
          title: '無法編輯餐廳，請稍後再試'
        })
      }
    },
    async afterPatchSale(payload) {
      try {
        this.isProcessing = true
        const { mealId, isSale } = payload
        const { data } = await businessAPI.patchIsSale(mealId, {
          isSale: isSale
        })
        if (data.status !== 'success') {
          throw new Error()
        }

        const index = this.menu.meals.findIndex(item => item.id === mealId)
        this.menu.meals[index].isSale = isSale
        this.isProcessing = false
      } catch (err) {
        console.error(err)
        Toast.fire({
          icon: 'error',
          title: '無法更新狀態，請稍後再試'
        })
        this.isProcessing = false
      }
    }
  },
  created() {
    const params = this.$route.params
    const { page = '' } = this.$route.query
    this.nowPage = params.name
    if (this.nowPage === 'restaurant') {
      this.fetchRestaurant()
    } else if (this.nowPage === 'menu') {
      this.fetchMenu({ queryPage: page })
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.nowPage = to.params.name
    const { page = '' } = to.query
    if (this.nowPage === 'restaurant') {
      this.fetchRestaurant()
    } else if (this.nowPage === 'menu') {
      this.fetchMenu({ queryPage: page })
    }
    next()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/pages/BusinessCenter';
</style>
