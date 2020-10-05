<template>
  <div class="container">
    <div class="space-40"></div>
    <div class="member_wrapper">
      <UserNavTab :tabs="tabs" />

      <div class="wrapper">
        <transition name="changePage">
          <component :is="renderComponents"></component>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import MemberHistoryOrder from '../components/MemberPage/MemberHistoryOrder'
import UserNavTab from '../components/UserNavTab'
import MemberInfo from '../components/MemberPage/MemberInfo'

export default {
  components: {
    UserNavTab,
    MemberHistoryOrder,
    MemberInfo
  },
  data() {
    return {
      nowPage: 'history',
      tabs: [
        {
          name: '我的訂單',
          pathName: 'member',
          paramsName: 'history'
        },
        {
          name: '修改會員資料',
          pathName: 'member',
          paramsName: 'info'
        }
      ]
    }
  },
  computed: {
    renderComponents() {
      let ComponentName = ''
      if (this.nowPage === 'history') {
        ComponentName = 'MemberHistoryOrder'
      } else if (this.nowPage === 'info') {
        ComponentName = 'MemberInfo'
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
@import '@/assets/css/pages/Member';
</style>
