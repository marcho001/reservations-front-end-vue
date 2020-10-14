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
              :key="meal.id"  
              :meal="meal"
            />
          </div>

          <EditMenuForm
            @after-toggle-edit-form="afterToggleEditForm"
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
      this.editMenu = true
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
