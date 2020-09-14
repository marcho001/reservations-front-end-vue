<template>
  <nav class="d-flex justify-content-between p-3 position-fixed">
    <div class="nav_brand">
      <h1>S.W.</h1>
    </div>
    <div class="nav_wrapper d-flex align-items-center">
        <a 
          v-if="!user.id" 
          href="#"
          >登入</a>
      <template v-else>
        <template v-if="user.role === 'user'">
            <a href="#">訂單行事曆</a>
        </template>

        <template v-if="user.role === 'owner'">
            <a 
              href="#">我的餐廳</a>
            <a 
            href="#">我的菜單</a>
        </template>
          <a 
          v-else 
          href="#">加入我們</a>
          <a 
          href="#">通知</a>
      </template>
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
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.692);
}
.nav_brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: $white;
}
.nav_wrapper {
  a {
    font-weight: bold;
    color: darken($white, $linkBeforeHoverAmount);
    margin: 0 5px;
    &:hover {
      color: $white;
    }
  }
}

</style>
