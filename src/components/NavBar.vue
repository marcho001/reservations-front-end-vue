<template>
  <nav class="d-flex justify-content-between p-3">
    <div class="nav_brand">S.T.</div>
    <!--
    all
    2. 登入
    1. 加入我們
    normal user
    3. 訂單行事利
    4. 通知
    owner
    5. 編輯餐廳
    6. 編輯菜單
    -->
    <div class="nav_wrapper d-flex">
      <div v-if="!user.id" class="nav_wrapper--signin">
        <a href="#">登入</a>
      </div>
      <template v-else>
        <template v-if="user.role === 'user'">
          <div class="nav_wrapper--calendar">
            <a href="#">訂單行事曆</a>
          </div>
        </template>

        <template v-if="user.role === 'owner'">
          <div class="nav_wrapper--edit-rest">
            <a href="#">我的餐廳</a>
          </div>
          <div class="nav_wrapper--edit-menu">
            <a href="#">我的菜單</a>
          </div>
        </template>
        <div class="nav_wrapper--notification">
          <a href="#">通知</a>
        </div>
      </template>
      <div v-else class="nav_wrapper--join">
        <a href="#">加入我們</a>
      </div>
    </div>
  </nav>
</template>

<script>
const fakeUser = {
  id: 2,
  name: 'marc',
  role: 'user',
  email: 'user@example.com'
}
export default {
  data() {
    return {
      user: {
        id: '',
        name: '',
        role: '',
        email: ''
      }
    }
  },
  methods: {
    fetchUser() {
      this.user = {
        ...this.user,
        ...fakeUser
      }
    }
  },
  created() {
    this.fetchUser()
  }
}
</script>

<style lang="scss" scoped>
nav {
  height: 60px;
}

</style>
