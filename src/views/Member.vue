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
import EditMemberInfo from '../components/MemberPage/EditMemberInfo'

export default {
  components: {
    UserNavTab,
    MemberHistoryOrder,
    EditMemberInfo
  },
  data() {
    return {
      nowPage: 'history',
      tabs: [
        {
          name: '會員總覽',
          pathName: 'member',
          paramsName: 'info'
        },
        {
          name: '所有訂單',
          pathName: 'member',
          paramsName: 'history'
        },
        {
          name: '修改會員資料',
          pathName: 'member',
          paramsName: 'edit'
        }
      ]
    }
  },
  computed: {
    renderComponents() {
      let ComponentName = ''
      if (this.nowPage === 'history') {
        ComponentName = 'MemberHistoryOrder'
      } else if (this.nowPage === 'edit') {
        ComponentName = 'EditMemberInfo'
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
