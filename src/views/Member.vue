<template>
  <div class="container">
    <div class="space-40"></div>
    <div class="member_wrapper">

     <MemberNavbar />

      <div class="wrapper">

        <MemberHistoryOrder />

      </div>
    </div>
    
    
   
  </div>
</template>
<script>
import MemberHistoryOrder from '../components/MemberPage/MemberHistoryOrder'
import MemberNavbar from '../components/MemberPage/MemberNavbar'

export default {
  components: {
    MemberNavbar,
    MemberHistoryOrder
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/pages/Member';
</style>
