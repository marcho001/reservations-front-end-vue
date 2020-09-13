<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="form-section p-4">
      <form>
        <div class="form-section_title mt-3 text-center">
          <h1>登入</h1>
        </div>
        <div class="form-section_group mt-5">
          <div class="form-section_group-input d-flex flex-column">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div class="form-section_group-input mt-3 d-flex flex-column">
            <label for="password">Password</label>
            <input type="password" name="Password" id="Password" />
          </div>
          <div class="form-section_group-button mt-3">
            <button type="submit">立即登入</button>
          </div>
        </div>
      </form>
      <div class="footer-section mt-5">
        <p>
          尚未註冊嗎？
          <a href="#">立即註冊</a>
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  background-image: url('../assets/image/signin.jpg');
  background-size: cover;
  height: 100%;
}

.form-section {
  width: 80%;
  background: rgba(255, 255, 255, 0.856);
  border-radius: 10px;
  @extend %shadow;
}
@media screen and (min-width: 768px) {
  .container {
    align-items: flex-start;
  }
}
</style>
