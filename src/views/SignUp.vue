<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="form-section p-4">
      <form
        @submit.prevent="handleSubmit">
        <div class="form-section_title mt-3 text-center">
          <h1>註冊帳號</h1>
        </div>
        <div class="form-section_group mt-5">
          <div class="form-section_group-input d-flex flex-column">
            <label for="name">Name :</label>
            <input
              v-model="name"
              class="mt-2 px-2"
              type="text"
              id="name"
              required
            />
          </div>
          <div class="form-section_group-input mt-3 d-flex flex-column">
            <label for="email">Email :</label>
            <input
              v-model="email"
              class="mt-2 px-2"
              type="email"
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
              id="password"
              required
            />
          </div>
          <div class="form-section_group-input mt-3 d-flex flex-column">
            <label for="passwordCheck">確認密碼 :</label>
            <input
              v-model="passwordCheck"
              class="mt-2 px-2"
              type="password"
              id="passwordCheck"
              required
            />
          </div>
          <div
            class="form-section_group-button mt-5 d-flex flex-column align-items-center"
          >
            <button class="p-1" type="submit">註冊</button>
          </div>
        </div>
      </form>
      <div class="footer-section mt-5 text-right">
        <p>
          已經註冊了？
          <router-link 
            to="/signin">
            立即登入
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast} from '../utils/helpers'
import authorization from '../api/authorization'
export default {
  data() {
    return {
      email: '',
      name: '',
      password: '',
      passwordCheck: ''
    }
  },
  methods: {
    async handleSubmit () {
      try {
        //驗證欄位
        if (!this.name || !this.email || !this.password || !this.passwordCheck) {
          Toast.fire({
            icon: 'warning',
            title: '所有欄位都要輸入！'
          })
          this.password = ''
          this.passwordCheck = ''
          return
        }
        //驗證密碼和確認密碼
        if (this.password !== this.passwordCheck) {
          Toast.fire({
            icon: 'warning',
            title: '密碼和確認密碼不符'
          })
          this.password = ''
          this.passwordCheck = ''
          return
        }
        // 向 api post 註冊資訊
        const formData = {
          email: this.email,
          name: this.name,
          password: this.password,
          passwordCheck: this.passwordCheck
        }
        const { data } = await authorization.signUp(formData)
        console.log(data)
        if (data.status !== 'success') {
          Toast.fire({
            icon: 'warning',
            title: data.message
          })
          throw new Error(data.message)
        }
        // 轉跳到登入頁
        this.$router.push('/signin')

      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/pages/SignIn';
</style>
