<template>
  <div class="container">
    <div class="space-40"></div>
    <div class="business_wrapper">
      <UserNavTab 
        :tabs="tabs"/>
        <div class="wrapper">

        
      </div>

    </div>
  </div>
</template>

<script>
import UserNavTab from '../components/UserNavTab'
export default {
  components: {
    UserNavTab
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

<style lang="scss">

@media screen and (min-width: 768px) {
  .business_wrapper {
    display: flex;
  }
  .wrapper {
    height: 100vh;
    overflow: scroll;
    scroll-behavior: smooth;
  }
}
</style>
