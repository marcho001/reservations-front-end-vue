<template>
  <div class="container">
    <div class="space-40"></div>
    <div class="business_wrapper">
      <UserNavTab :tabs="tabs" />
      <div class="wrapper">
        <EditRestaurant
          v-if="nowPage === 'restaurant'"
          :init-restaurant="restaurant"
        />
        <template v-else>
          <button @click="toggleEditForm" class="create m-4">
            新增餐點
          </button>
          <hr />
          <div class="menu d-grid p-2">
            <MenuCard
              v-for="meal in menu.meals"
              @after-edit-meal-form="afterEditMealForm"
              :key="meal.id"
              :meal="meal"
            />
          </div>

          <EditMenuForm
            @after-toggle-edit-form="afterToggleEditForm"
            @after-submit-create="afterSubmitCreate"
            @after-submit-update="afterSubmitUpdate"
            :meal-category="menu.mealCategory"
            :init-meal="meal"
            v-show="editMenu"
          />
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
import businessAPI from '../api/businessAPI'
import { Toast } from '../utils/helpers'

export default {
  components: {
    UserNavTab,
    EditRestaurant,
    MenuCard,
    EditMenuForm
  },
  data() {
    return {
      nowPage: 'menu',
      editMenu: false,
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
      restaurant: {
        id: -1,
        name: '',
        categoryId: -1,
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
        mealCategoryId: '',
        name: '',
        price: ''
      }
    }
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
      } catch (err) {
        console.error(err)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳，請稍後再試'
        })
      }
    },
    async fetchMenu() {
      try {
        const { data, statusText } = await businessAPI.getMenu()
        if (statusText === 'error') {
          throw new Error()
        }
        this.menu = {
          ...data
        }
      } catch (err) {
        console.error(err)
        Toast.fire({
          icon: 'error',
          title: '無法取得菜單，請稍後再試'
        })
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
    async afterSubmitCreate (payload) {
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
    async afterSubmitUpdate (payload) {
      try {
        const meal = await businessAPI.putMeal(payload)
        if (data.status !== 'success') {
          this.editMenu = false
          throw new Error(data.message)
        }
        const index = this.menu.meals.findIndex(item => item.id === payload.meal.id)
        this.menu.meals[index] = payload.meal
      } catch (err) {
        console.error(err)
        Toast.fire({
          icon: 'error',
          title: '無法更新餐點，請稍後再試'
        })
      }
    }
  },
  created() {
    const params = this.$route.params
    this.nowPage = params.name
    if (this.nowPage === 'restaurant') {
      this.fetchRestaurant()
    } else if (this.nowPage === 'menu') {
      this.fetchMenu()
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.nowPage = to.params.name
    if (this.nowPage === 'restaurant') {
      this.fetchRestaurant()
    } else if (this.nowPage === 'menu') {
      this.fetchMenu()
    }
    next()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/pages/BusinessCenter';
</style>
