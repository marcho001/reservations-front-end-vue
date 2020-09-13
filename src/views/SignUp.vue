
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
              class="mt-2 px-2" 
              type="text" 
              name="name" 
              id="name" 
              required/>
          </div>
          <div class="form-section_group-input mt-3 d-flex flex-column">
            <label for="email">Email :</label>
            <input 
              class="mt-2 px-2" 
              type="email" 
              name="email" 
              id="email" 
              required/>
          </div>
          <div class="form-section_group-input mt-3 d-flex flex-column">
            <label for="password">Password :</label>
            <input 
              class="mt-2 px-2" 
              type="password" 
              name="Password" 
              id="Password" 
              required/>
          </div>
          <div class="form-section_group-button mt-5 d-flex flex-column align-items-center">
          <div class="form-section_group-input d-flex flex-column">
            <label for="checkPassword">確認密碼 :</label>
            <input 
              class="mt-2 px-2" 
              type="password" 
              name="checkPassword" 
              id="checkPassword" 
              required/>
          </div>
            <button class="p-1" type="submit">立即登入</button>
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
