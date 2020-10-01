<template>
  <div class="container">
    <div class="space-40"></div>
    <div class="member_wrapper">
      <MemberNavbar @after-change-page="afterChangePage" />

      <div class="wrapper">
        <transition name="changePage">
          <MemberHistoryOrder v-if="nowPage === 'history'" />
          <MemberInfo v-else-if="nowPage === 'info'" />
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import MemberHistoryOrder from '../components/MemberPage/MemberHistoryOrder'
import MemberNavbar from '../components/MemberPage/MemberNavbar'
import MemberInfo from '../components/MemberPage/MemberInfo'

export default {
  components: {
    MemberNavbar,
    MemberHistoryOrder,
    MemberInfo
  },
  data() {
    return {
      nowPage: 'history'
    }
  },
  methods: {
    afterChangePage(page) {
      this.nowPage = page
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/pages/Member';
</style>
