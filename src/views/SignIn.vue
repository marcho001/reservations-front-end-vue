<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="form-section p-4">
      <form @submit.prevent="handleSubmit">
        <div class="form-section_title mt-3 text-center">
          <h1>登入</h1>
        </div>
        <div class="form-section_group mt-5">
          <div class="form-section_group-input d-flex flex-column">
            <label for="email">Email :</label>
            <input
              v-model="email"
              class="mt-2 px-2"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div class="form-section_group-input mt-3 d-flex flex-column">
            <label for="password">Password :</label>
            <input
              v-model="password"
              class="mt-2 px-2"
              type="password"
              name="Password"
              id="Password"
              required
            />
          </div>
          <div
            class="form-section_group-button mt-5 d-flex flex-column align-items-center"
          >
            <button :disabled="isProcessing" class="p-1" type="submit">
              立即登入
            </button>
          </div>
        </div>
      </form>
      <div class="footer-section mt-5 text-right">
        <p>
          尚未註冊嗎？
          <router-link to="/signup">
            立即註冊
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from '../utils/helpers'
import authorization from '../api/authorization'
export default {
  data() {
    return {
      email: '',
      password: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: 'warning',
            title: '請輸入 email 和 password'
          })
          return
        }
        this.isProcessing = true

        // 向 api post 登入
        const { data } = await authorization.signin({
          email: this.email,
          password: this.password
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // 將token 存到 localstorage
        localStorage.setItem('token', data.token)
        // 使用者資料存到 vuex
        this.$store.commit('setCurrentUser', data.user)
        // 轉跳到首頁
        this.$router.push('/home')
      } catch (err) {
        console.error(err)
        this.password = ''
        this.isProcessing = false
        Toast.fire({
          icon: 'warning',
          title: '請輸入正確帳號密碼'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/pages/SignIn';
</style>
