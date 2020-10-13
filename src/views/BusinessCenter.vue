<template>
  <div class="container">
    <div class="space-40"></div>
    <div class="business_wrapper">
      <UserNavTab :tabs="tabs" />
      <div class="wrapper">
        <EditRestaurant 
          v-if="nowPage === 'restaurant'"
          :init-restaurant="restaurant"/>
        <Menu 
          v-else/>
      </div>
    </div>
  </div>
</template>

<script>
import UserNavTab from '../components/UserNavTab'
import EditRestaurant from '../components/BusinessPage/EditRestaurant'
import Menu from '../components/BusinessPage/Menu'
import businessAPI from '../api/businessAPI'

export default {
  components: {
    UserNavTab,
    EditRestaurant,
    Menu
  },
  data() {
    return {
      nowPage: 'menu',
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
      }
    }
  },
  methods: {
    async fetchRestaurant () {
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
      }
    }
  },
  created() {
    const params = this.$route.params
    this.nowPage = params.name
    this.fetchRestaurant()

  },
  beforeRouteUpdate(to, from, next) {
    this.nowPage = to.params.name
    next()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/pages/BusinessCenter';
</style>
