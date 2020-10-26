<template>
  <footer class="footer mt-5 d-flex align-items-center">
    <div class="footer_wrapper d-flex w-75 flex-column">
      <h1 class="footer_wrapper--brand">STOP WAITING</h1>
      <div class="footer_wrapper--link d-flex flex-column mt-2">
        <router-link 
          class="link-item"
          :to="{ name: 'signin' }">
            立即註冊
        </router-link>
        <div class="link-item cursor-pointer" href="#">
          GitHub 連結
          <span class="ml-3 d-none">
            <a href="https://github.com/marcho001/reservations-front-end-vue">前端</a> ｜
            <a href="https://github.com/robert913152750/Restaurant_Reservation_Back_End_NodeJs">後端</a>
          </span>
        </div>
        <a class="link-item" href="#">聯絡我們</a>
        <router-link 
          class="link-item"
          :to="{ name: 'join-us' }">常見問題</router-link>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../assets/css/components/Footer.scss';
</style>
