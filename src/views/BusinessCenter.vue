<template>
  <div class="container">
    <div class="space-40"></div>
    <div class="business_wrapper">
      <UserNavTab 
        :tabs="tabs"/>
        <div class="wrapper">

      <EditRestaurant />
      </div>

    </div>
  </div>
</template>

<script>
import UserNavTab from '../components/UserNavTab'
import EditRestaurant from '../components/BusinessPage/EditRestaurant'
export default {
  components: {
    UserNavTab,
    EditRestaurant
  },
  data () {
    return {
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
  }
}
</script>

<style lang="scss" scoped>
.business_wrapper {
  display: flex;
}
.wrapper {
  height: 100vh;
  overflow: scroll;
  scroll-behavior: smooth;
}

</style>
