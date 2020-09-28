<template>
  <nav
    class="d-flex justify-content-between p-3 align-items-center position-fixed"
  >
    <div class="nav_brand d-flex align-items-center">
      <h1 class="">S.W.</h1>
    </div>
    <div class="nav_wrapper">
      <router-link 
        v-if="!currentUser.role" 
        to="/signin">登入
        </router-link>
      <template v-else>
        <template v-if="currentUser.role === 'common'">
          <a href="#">訂單行事曆</a>
        </template>

        <template v-if="currentUser.role === 'business'">
          <a href="#">我的餐廳</a>
          <a href="#">我的菜單</a>
        </template>
        <a v-else href="#">加入我們</a>
        <a href="#">通知</a>
      </template>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
   computed: {
     ...mapState(['currentUser', 'isAuthenticated'])
   }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/components/NavBar';
</style>
