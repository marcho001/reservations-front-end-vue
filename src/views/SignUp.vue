<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="form-section p-4">
      <form>
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
              name="name"
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
          <div class="form-section_group-input mt-3 d-flex flex-column">
            <label for="checkPassword">確認密碼 :</label>
            <input
              v-model="checkPassword"
              class="mt-2 px-2"
              type="password"
              name="checkPassword"
              id="checkPassword"
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
          <router-link to="/signin">立即登入</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 向 api post 註冊資訊
  // 轉跳到登入頁
  data() {
    return {
      email: '',
      name: '',
      password: '',
      checkPassword: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/pages/SignIn';
</style>
