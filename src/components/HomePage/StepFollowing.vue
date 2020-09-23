<template>
  <section class="step">
      <input type="checkbox" id="toggle" class="step_toggle d-none" />
      <label
        for="toggle"
        class="step_label d-flex flex-column  align-items-center cursor-pointer py-2"
      >
        <p>第一次進來，該如何使用？</p>
      </label>
      <div class="step_ans d-flex justify-content-around">
        <div class="step_ans_wrapper">
          <h3 class="title">STEP.1</h3>
          <div class="step_ans_wrapper--item p-2 text-center">選擇餐廳</div>
        </div>
        <div class="step_ans_wrapper">
          <h3 class="title">STEP.2</h3>
          <div class="step_ans_wrapper--item p-2 text-center">
            選擇餐點及人數
          </div>
        </div>
        <div class="step_ans_wrapper">
          <h3 class="title">STEP.3</h3>
          <div class="step_ans_wrapper--item p-2 text-center">
            確認訂單，線上付款
          </div>
        </div>
        <div class="step_ans_wrapper text-center">
          <h3 class="title">STEP.4</h3>
          <div class="step_ans_wrapper--item p-2 text-center">準備用餐！</div>
        </div>
      </div>
    </section>
</template>

<style lang="scss" scoped>
@import '@/assets/css/components/HomePage/StepFollowing';
</style>
