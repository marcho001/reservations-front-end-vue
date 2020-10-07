<template>
  <div class="container">
    <div class="space-40"></div>
    <div class="business_wrapper">
      <UserNavTab :tabs="tabs" />
      <div class="wrapper">
        <component :is="renderComponents"></component>
        
      </div>
    </div>
  </div>
</template>

<script>
import UserNavTab from '../components/UserNavTab'
import EditRestaurant from '../components/BusinessPage/EditRestaurant'
import Menu from '../components/BusinessPage/Menu'

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
      ]
    }
  },
  computed: {
    renderComponents() {
      let ComponentName = ''
      if (this.nowPage === 'restaurant') {
        ComponentName = 'EditRestaurant'
      } else if (this.nowPage === 'menu') {
        ComponentName = 'Menu'
      } 
      return ComponentName
    }
  },
  created() {
    this.nowPage = this.$route.params.name
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
