<template>
  <nav
    class="d-flex justify-content-between p-3 align-items-center position-fixed"
  >
    <div class="d-flex align-items-center">
      <router-link
        class="nav_brand" 
        to="/home">
          S.W.
      </router-link>
    </div>
    <div class="nav_wrapper">
    <template
      v-if="!currentUser.role" 
    >
      <router-link
        class="nav_wrapper_link" 
        to="/signin">
          登入 
      </router-link>
      <router-link 
          class="nav_wrapper_link"
          to="/join">
          加入我們
        </router-link>
    </template>
      <template v-else>
        <template v-if="currentUser.role === 'common'">
          <router-link
            class="nav_wrapper_link"
            :to="{ 
              name: 'member', 
              params: { id: currentUser.id, name: 'info' 
              }}">
            會員中心
          </router-link>
          <router-link 
          class="nav_wrapper_link"
          to="/join">
          加入我們
        </router-link>
        </template>

        <template v-if="currentUser.role === 'business'">
          <router-link 
            class="nav_wrapper_link"
            :to="{ 
              name: 'restaurant',
              params: { id: currentUser.id } 
            }">
            我的餐廳
          </router-link>
          <router-link
            class="nav_wrapper_link"
            :to="{
              name: 'business',
              params: { id: currentUser.id, name: 'restaurant' }
            }">
            餐廳後台
          </router-link>
        </template>
        <button
          class="nav_wrapper_link"
          @click="logout"
          >登出</button>
      </template>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
  methods: {
    logout () {
      this.$store.commit('revokeAuthentication')
      if (this.$route.name === 'home') return
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/components/NavBar';
</style>
